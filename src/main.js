import Product from "./models/Product.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
// function printProductValues(productValue: Product): void {
//     console.log(`SKU: ${productValue.sku}, Name: ${productValue.name}, Price: $ ${productValue.price}, Weight: ${productValue.weight}, Size: ${productValue.fileSize}, Total Price: ${productValue.getPriceWithTax(productValue)}`);
// }
const product1 = new PhysicalProduct("BB1", "1 TB SSD", 65.99, 0.03);
const product2 = new DigitalProduct("R2D", "Blog App", 3.99, 28);
// printProductValues(product1);
// printProductValues(product2);
for (const key in product1) {
    // Ensure the property belongs to the instance itself, not its prototype chain
    if (Object.prototype.hasOwnProperty.call(product1, key)) {
        const value = product1[key]; // Type assertion for safety
        if (key === "price") {
            console.log(`${key}: $ ${value}`);
        }
        else if (key === "weight") {
            console.log(`${key}: ${value} kg`);
        }
        else if (key === "fileSize") {
            console.log(`${key}: ${value} MB`);
        }
        else {
            console.log(`${key}: ${value}`);
        }
    }
}
console.log(`Total price: $ ${product1.getPriceWithTax()}`);
for (const key in product2) {
    // Ensure the property belongs to the instance itself, not its prototype chain
    if (Object.prototype.hasOwnProperty.call(product2, key)) {
        const value = product2[key]; // Type assertion for safety
        if (key === "price") {
            console.log(`${key}: $ ${value}`);
        }
        else if (key === "weight") {
            console.log(`${key}: ${value} kg`);
        }
        else if (key === "fileSize") {
            console.log(`${key}: ${value} MB`);
        }
        else {
            console.log(`${key}: ${value}`);
        }
        ;
    }
}
console.log(`Total price: $ ${product2.getPriceWithTax()}`);
//# sourceMappingURL=main.js.map