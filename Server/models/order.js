const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    totalAmount: Number,
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
