import Product from "../models/Product.js";


export function calculateTax(myProduct: Product, taxRate: number) {
    return myProduct.price * (1 + taxRate);
}