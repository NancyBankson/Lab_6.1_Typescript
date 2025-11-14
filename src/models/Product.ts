import { calculateTax } from "../utils/taxCalculator.js";

export default class Product {
    public static taxRate: number = 0.05;

    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `SKU: ${this.sku} Product Name: ${this.name} Price : $ ${this.price}`;
    }

    getPriceWithTax() {
        return calculateTax(this);
    }
}