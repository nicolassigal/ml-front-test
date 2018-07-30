import express from 'express';
import React from 'react';
import renderer from './helpers/renderer';
import path from 'path';
import cors from 'cors';
import axios from 'axios';
import { matchPath } from 'react-router-dom';
import Routes from '../shared/routes';

const API_ENDPOINT = 'http://localhost:3200/api';
const port = process.env.port || 5000;
const app = express();
const router = express.Router();
app.use(express.static('public'));

router.get('/', (req, res) => {
    const html = renderer(req, {});
    res.send(html);
});

router.get('/items', (req, res) => {
    const query = req.query.q || '';
    axios.get(`${API_ENDPOINT}/items?q=${query}`)
    .then(response => {
        const html = renderer(req, response.data);
        res.send(html);
    })
    .catch(err => console.log(err));
});

router.get('/items/:id', (req, res) => {
    const id = req.params.id || '';
    axios.get(`${API_ENDPOINT}/items/${id}`)
    .then(response => {
        const html = renderer(req, response.data);
        res.send(html);
    })
    .catch(err => console.log(err));
});



app.use(cors());
app.use('/', router);
app.listen(port, () => console.log(`RENDER server is listening on port: ${port}`));