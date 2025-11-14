import Product from "./Product.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return Math.round(100 * calculateTax(this, 0)) / 100;
    }
    get fileSizeInMb() {
        return `${this.fileSize} MB`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map