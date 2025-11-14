import Product from "../models/Product.js";
// import {PhysicalProduct} from "../models/PhysicalProduct.js";
// import {DigitalProduct} from "../models/DigitalProduct.js";
export function calculateTax(myProduct) {
    // if (Product instanceof PhysicalProduct) {
    //     return myProduct.price * 1.1;
    // } else if (Product instanceof DigitalProduct) {
    //     return myProduct.price;
    // }
    return myProduct.price;
}
//# sourceMappingURL=taxCalculator.js.map