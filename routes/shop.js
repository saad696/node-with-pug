const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin')

const routes = express.Router();

routes.get('/', (req, res, next) => {
    const products = adminData.products
    res.render('shop', {docTitle: 'Shop', prods: products, page: 'shop'})
});

module.exports = routes;
