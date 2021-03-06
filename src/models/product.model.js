'use strict'

const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name: String,
    stock: Number,
    sales: Number,
    price: Number,
    status: String,
    description: String,
    aditional: String,
    category: {type: mongoose.Schema.ObjectId, ref: 'Category'}
});

module.exports = mongoose.model('Product', productSchema);