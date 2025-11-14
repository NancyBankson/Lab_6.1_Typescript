import { calculateTax } from "../utils/taxCalculator.js";
export default class Product {
    static taxRate = 0.05;
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `SKU: ${this.sku} Product Name: ${this.name} Price : $ ${this.price}`;
    }
    getPriceWithTax() {
        return calculateTax(this);
    }
}
//# sourceMappingURL=Product.js.map