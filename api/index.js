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
        Promise.all([
        axios.get(`${api_config.ML_ITEMS_API}/${req.params.id}`),
        axios.get(`${api_config.ML_ITEMS_API}/${req.params.id}/description`)
        ])
        .then(([itemResponse , descriptionResponse]) => {
                itemResponse.data.description = descriptionResponse.data.plain_text;
                axios.get(`${api_config.ML_CATEGORY_API}/${itemResponse.data.category_id}`)
                .then(categoryResponse => {
                    if (itemResponse.status === 200 &&
                        descriptionResponse.status === 200 &&
                        categoryResponse.status === 200) {
                        const response = {
                            author: packageJSON.author,
                            item: new Item(itemResponse.data, QUERY_ITEM),
                            categories: getCategories(categoryResponse.data)
                        }
                        res.json(response);
                     } else {
                        res.error({});
                     }
                }).catch(error => res.json(error));
        })
        .catch(error => res.json(error));
});

function parseSearch (searchData) {
    const categoryFilter = searchData.filters.find(filter => filter.id === FILTER_CATEGORY);
    let categories = [],
        author = packageJSON.author,
        items = searchData.results.map(item => new Item(item, QUERY_SEARCH));

    if(categoryFilter && categoryFilter.values.length) {
        categories = getCategories(categoryFilter.values[0]);
    }

    return {
        author: author,
        categories: categories,
        items: items
    };
};

function Item (item, query) {
    this.id = item.id;
    this.title = item.title;
    const integer_part = Math.floor(Number(item.price));
    const decimal_part = Number((Number(item.price) - integer_part).toFixed(2)) * 100;

    this.price = {
        currency: item.currency_id,
        amount: integer_part,
        decimals: decimal_part
    };
    
    this.picture = item.thumbnail;
    this.condition = item.condition;
    this.free_shipping = item.shipping.free_shipping;
    if (query === QUERY_SEARCH) {
        this.state = item.address.state_name;  
    }
    if (query === QUERY_ITEM) {
        this.sold_quantity = Number(item.sold_quantity);
        this.description = item.description;
    }
}

function getCategories (categories) {
    return categories.path_from_root.map(category => category.name);
}

app.use('/api', router);
app.use(cors());
app.listen(port, () => console.log(`API Server running on port ${port}`));