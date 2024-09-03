"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.products = [];
        this.nextId = 1;
    }
    Inventory.prototype.addProduct = function (name, quantity, price, category) {
        if (!this.isValidCategory(category)) {
            var error_msg = "Invalid category: ".concat(category, ". Must be one of Electronics, Clothing, or Food.");
            console.log(error_msg);
            return error_msg;
        }
        var product = {
            id: this.nextId++,
            name: name,
            quantity: quantity,
            price: price,
            category: category
        };
        this.products.push(product);
        console.log("Product ".concat(name, " added successfully"));
        console.log(product);
        return product;
    };
    Inventory.prototype.updateProduct = function (productId, attributeName, newValue) {
        if (!this.isValidAttribute(attributeName)) {
            var error_msg = "Invalid attribute: ".concat(attributeName, ". Must be one of name, quantity, price, or category.");
            console.log(error_msg);
            return error_msg;
        }
        var productIdx = this.products.findIndex(function (p) { return p.id === productId; });
        if (productIdx == -1) {
            var error_msg = "Product with ID ".concat(productId, " not found.");
            console.log(error_msg);
            return error_msg;
        }
        this.products[productIdx][attributeName] = newValue;
        console.log("Product ".concat(this.products[productIdx].name, " updated successfully"));
        console.log(this.products[productIdx]);
        return this.products[productIdx];
    };
    Inventory.prototype.getProduct = function (productId) {
        var product = this.products.find(function (p) { return p.id === productId; });
        if (!product) {
            var error_msg = "Product with ID ".concat(productId, " not found.");
            console.log(error_msg);
            return error_msg;
        }
        console.log(product);
        return product;
    };
    Inventory.prototype.getTotal = function () {
        return this.products
            .map(function (p) { return p.price; })
            .reduce(function (total, price) { return total + price; }, 0);
    };
    Inventory.prototype.isValidCategory = function (category) {
        return ["Electronics", "Clothing", "Food"].includes(category);
    };
    Inventory.prototype.isValidAttribute = function (attributeName) {
        return ["name", "quantity", "price", "category"].includes(attributeName);
    };
    return Inventory;
}());
exports.Inventory = Inventory;
var inventory = new Inventory();
inventory.addProduct("Laptop", 10, 1500, "Electronics");
inventory.addProduct("Laptop2", 20, 1500, "Nothingness");
inventory.addProduct("Laptop3", 30, 2000, "Clothing");
inventory.updateProduct(1, "name", "Gaming Laptop");
inventory.updateProduct(2, "price", 1200);
inventory.updateProduct(3, "price", 1200);
inventory.getProduct(2);
inventory.getProduct(3);
console.log(inventory.getTotal());
