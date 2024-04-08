const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    description: String,
    image: String, 
    price: Number,
    shippingCost: Number
});

module.exports = mongoose.model('Product', productSchema);
