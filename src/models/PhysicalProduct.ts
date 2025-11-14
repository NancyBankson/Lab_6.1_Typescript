import Product from "./Product.js";
import { calculateTax } from "../utils/taxCalculator.js";

export class PhysicalProduct extends Product {
    weight: number;

constructor(sku: string, name:string, price:number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
}

getPriceWithTax() {
        return calculateTax(this)
    }

get weightInKg(): string {
    return `${this.weight} kg`;
}
}