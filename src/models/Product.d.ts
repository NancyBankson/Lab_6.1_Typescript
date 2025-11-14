export default class Product {
    static taxRate: number;
    sku: string;
    name: string;
    price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=Product.d.ts.map