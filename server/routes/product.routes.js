const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
    app.get("/api", ProductController.index);
    app.post("/api/new", ProductController.createProduct);
    app.get("/api/products", ProductController.getAllProduct);
    app.get("/api/products/:id", ProductController.getProduct);
};
