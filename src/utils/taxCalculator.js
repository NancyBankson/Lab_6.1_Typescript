import Product from "../models/Product.js";
export function calculateTax(myProduct, taxRate) {
    return myProduct.price * (1 + taxRate);
}
//# sourceMappingURL=taxCalculator.js.map