const express = require("express");
const router = express.Router();

const productCRUD = require("./CRUD/productCRUD");
const userCRUD = require("./CRUD/userCRUD");
const commentCRUD = require("./CRUD/commentsCRUD");
const cartCRUD = require("./CRUD/cartCRUD");
const orderCRUD = require("./CRUD/orderCRUD");

// Product routes
router.get("/products", productCRUD.getAllProducts);
router.get("/products/:id", productCRUD.getProductById);
router.post("/products", productCRUD.createProduct);
router.put("/products/:id", productCRUD.updateProduct);
router.delete("/products/:id", productCRUD.deleteProduct);

// User routes
router.get("/users", userCRUD.getAllUsers);
router.get("/users/:id", userCRUD.getUserById);
router.post("/users", userCRUD.createUser);
router.put("/users/:id", userCRUD.updateUser);
router.delete("/users/:id", userCRUD.deleteUser);

// Comment routes
router.get("/comments", commentCRUD.getAllComments);
router.get("/comments/:id", commentCRUD.getCommentById);
router.post("/comments", commentCRUD.createComment);
router.put("/comments/:id", commentCRUD.updateComment);
router.delete("/comments/:id", commentCRUD.deleteComment);

// Cart routes
router.get("/carts", cartCRUD.getAllCarts);
router.get("/carts/:id", cartCRUD.getCartById);
router.post("/carts", cartCRUD.createCart);
router.put("/carts/:id", cartCRUD.updateCart);
router.delete("/carts/:id", cartCRUD.deleteCart);

// Order routes
router.get("/orders", orderCRUD.getAllOrders);
router.get("/orders/:id", orderCRUD.getOrderById);
router.post("/orders", orderCRUD.createOrder);
router.put("/orders/:id", orderCRUD.updateOrder);
router.delete("/orders/:id", orderCRUD.deleteOrder);

module.exports = router;
