import Product from "./Product.js";
import { calculateTax } from "../utils/taxCalculator.js";

export class DigitalProduct extends Product {
    fileSize: number;

constructor(sku: string, name:string, price:number, fileSize: number) {
    super(sku, name, price);
    this.fileSize = fileSize;
}

getPriceWithTax() {
        return calculateTax(this)
    }

get fileSizeInMb(): string {
    return `${this.fileSize} MB`;
}
}