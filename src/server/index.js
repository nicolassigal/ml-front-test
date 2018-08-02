import express from 'express';
import React from 'react';
import renderer from './helpers/renderer';
import cors from 'cors';
import axios from 'axios';
import { getCurrencySymbol } from '../shared/utils';
        
const API_ENDPOINT = 'http://localhost:3200/api';
const port = process.env.port || 5000;
const app = express();
const router = express.Router();
app.use(express.static('public'));

router.get('/', (req, res) => {
    const html = renderer(req, { searchQuery: '' }, 'Mercado Libre Argentina');
    res.send(html);
});

router.get('/items', (req, res) => {
    const query = req.query.q || '';
    axios.get(`${API_ENDPOINT}/items?q=${query}`)
    .then(response => {
        response.data.searchQuery = query;
        const category = response.data.categories  ? response.data.categories[0] : '';
        const categoryTitle = category ? `- ${ category } `: '';
        const title = `${query} ${categoryTitle}en Mercado Libre Argentina`;
        const html = renderer(req, response.data, title);
        res.send(html);
    })
    .catch(err => console.log(err));
});

router.get('/items/:id', (req, res) => {
    const id = req.params.id || '';
    axios.get(`${API_ENDPOINT}/items/${id}`)
    .then(response => {
        response.data.searchQuery = '';
        const productTitle = response.data.item.title;
        const productPrice = response.data.item.price.amount;
        const currency = getCurrencySymbol(response.data.item.price.currency);
        const title = `${productTitle} - ${currency} ${productPrice} en Mercado Libre Argentina`;
        const html = renderer(req, response.data, title);
        res.send(html);
    })
    .catch(err => console.log(err));
});

router.get('*', (req, res) => {
    const data = { searchQuery: '' };
    const html = renderer(req, data, 'Mercado Libre Argentina - Dónde comprar y vender de todo');
    res.send(html);
});

app.use(cors());
app.use('/', router);
app.listen(port, () => console.log(`RENDER server is listening on port: ${port}`));