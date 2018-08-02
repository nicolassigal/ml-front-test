import express from 'express';
import axios from 'axios';
import cors from 'cors';
import api_config from './config.json';
import packageJSON from './../package.json';
import { 
    QUERY_ITEM,
    QUERY_SEARCH,
    FILTER_CATEGORY
 } from './constants';
import { runInNewContext } from 'vm';

const app = express(),
    port = process.env.port || 3200,
    router = express.Router(),
    author = packageJSON.author;

router.get('/items', (req, res) => {
    const query = req.query.q || '',
        options = {params: { q: query, limit: 4 }};

    axios.get(api_config.ML_SEARCH_API, options)
        .then(response => {
            if(response.status === 200){
                res.json(parseSearch(response.data));
            }
        })
        .catch(error => res.json(error));
});

router.get('/items/:id', (req, res) => {
    let requests = [
        axios.get(`${api_config.ML_ITEMS_API}/${req.params.id}`).catch(e => e),
        axios.get(`${api_config.ML_ITEMS_API}/${req.params.id}/description`).catch(e => e)
    ];
    
    Promise.all(requests).then(([itemResponse, descriptionResponse]) => {
        if(itemResponse.data.category_id) {
            axios.get(`${api_config.ML_CATEGORY_API}/${itemResponse.data.category_id}`)
            .then(categoryResponse => {
                res.json(getItemResponse(itemResponse, descriptionResponse, categoryResponse));
            })
            .catch(error =>  res.json(getItemResponse(itemResponse, descriptionResponse, {})));
        } else {
            res.json(getItemResponse(itemResponse, descriptionResponse, {}));
        }
    });
});

function getItemResponse (itemResponse, descriptionResponse, categoryResponse) {
    return {
        author: packageJSON.author,
        item: itemResponse && itemResponse.status === 200 ? new Item(itemResponse.data, descriptionResponse, QUERY_ITEM) : {},
        categories: categoryResponse && categoryResponse.status === 200 ? getCategories(categoryResponse.data) : []
    }
}

function parseSearch (searchData) {
    const categoryFilter = searchData.filters.find(filter => filter.id === FILTER_CATEGORY);
    let categories = [],
        author = packageJSON.author,
        items = searchData.results.map(item => new Item(item, {}, QUERY_SEARCH));

    if(categoryFilter && categoryFilter.values.length) {
        categories = getCategories(categoryFilter.values[0]);
    }

    return {
        author: author,
        categories: categories,
        items: items
    };
};



function Item (item, descriptionResponse = {}, query) {
    this.id = item.id;
    this.title = item.title;
    const integer_part = Math.floor(Number(item.price));
    const decimal_part = Number((Number(item.price) - integer_part).toFixed(2)) * 100;

    this.price = {
        currency: item.currency_id,
        amount: pointThousandsSeparator(integer_part),
        decimals: decimal_part
    };
    
    this.condition = item.condition;
    this.free_shipping = item.shipping.free_shipping;
    if (query === QUERY_SEARCH) {
        this.state = item.address.state_name;  
        this.picture = item.thumbnail;
    }
    if (query === QUERY_ITEM) {
        this.sold_quantity = Number(item.sold_quantity);
        if(descriptionResponse && descriptionResponse.status === 200) {
            this.description = descriptionResponse.data.plain_text;
        } else {
            this.description = '';
        }
        let baseWidth = 0;
        item.pictures.map(picture => {
           let pictureWidth = picture.size.split('x')[0];
           if(pictureWidth > baseWidth) {
               baseWidth = pictureWidth;
               this.picture = picture.url;
           }
        });
    }
}

function getCategories (categories) {
    return categories.path_from_root.map(category => category.name);
}

function pointThousandsSeparator(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

app.use('/api', router);
app.use(cors());
app.listen(port, () => console.log(`API Server running on port ${port}`));