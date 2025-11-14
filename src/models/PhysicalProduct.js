import Product from "./Product.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    getPriceWithTax() {
        return Math.round(100 * calculateTax(this, 0.1)) / 100;
    }
    get weightInKg() {
        return `${this.weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map