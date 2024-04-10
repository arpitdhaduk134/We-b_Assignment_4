const Cart = require('../models/shoppingCart');

// Get all carts
exports.getAllCarts = async (req, res) => {
    try {
        const carts = await Cart.find();
        res.json(carts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single cart by ID
exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id);
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.json(cart);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new cart
exports.createCart = async (req, res) => {
    const cart = new Cart(req.body);
    try {
        const newCart = await cart.save();
        res.status(201).json(newCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a cart by ID
exports.updateCart = async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedCart);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a cart by ID
exports.deleteCart = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.json({ message: 'Cart deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
