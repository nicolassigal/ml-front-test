import express from 'express';
import axios from 'axios';
import cors from 'cors';
import api_config from './config/config.json';
import { getItemResponse, parseSearch } from './helpers/helpers';

const app = express(),
    port = process.env.port || 3200,
    router = express.Router();

router.get('/items', (req, res) => {
    const query = req.query.q || '',
        options = {params: { q: query, limit: 4 }};
    axios.get(api_config.ML_SEARCH_API, options)
        .then(response => {
            if(response.status === 200){
                let { data } = response;
                res.json(parseSearch(data));
            }
        }).catch(error => res.json(error));
});

router.get('/items/:id', (req, res) => {
    let requests = [
        axios.get(`${api_config.ML_ITEMS_API}/${req.params.id}`).catch(e => e),
        axios.get(`${api_config.ML_ITEMS_API}/${req.params.id}/description`).catch(e => e)
    ];
    
    Promise.all(requests).then(([itemResponse, descriptionResponse]) => {
        if(itemResponse.data.category_id) {
            axios.get(`${api_config.ML_CATEGORY_API}/${itemResponse.data.category_id}`)
            .then(categoryResponse =>  res.json(getItemResponse(itemResponse, descriptionResponse, categoryResponse)))
            .catch(error =>  res.json(getItemResponse(itemResponse, descriptionResponse, {})));
        } else {
            res.json(getItemResponse(itemResponse, descriptionResponse, {}));
        }
    });
});

app.use('/api', router);
app.use(cors());
app.listen(port, () => console.log(`API Server running on port ${port}`));