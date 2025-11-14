# Inventory Tracker

## Overview

In this lab, we explored TypeScript and Object Oriented Programming.  I created an inventory tracking system by creating a class for all products and then subclasses which included both physical products and digital products.  The project was separated into separate modules to make the project easy to read, compile, and update in the future.

## Features

The Project included the following tasks:

1. Setup Your Project:

- Create a new directory for the project and initialize it with npm:

    mkdir inventory-tracker
    cd inventory-tracker
    npm init -y

- Install TypeScript and other dependencies:

    npm install typescript @types/node --save-dev

- Create a tsconfig.json file:

    npx tsc --init

- Set up a basic folder structure for the project:

inventory-tracker/
├── src/
│   ├── models/
│   │   ├── Product.ts
│   │   ├── PhysicalProduct.ts
│   │   └── DigitalProduct.ts
│   ├── utils/
│   │   └── taxCalculator.ts
│   └── main.ts
└── tsconfig.json

2. Create the Product Base Class:

- Inside src/models/Product.ts, create a Product base class with the following:
    - Properties: sku (string), name (string), price (number).
    - Methods:
        - displayDetails() - a method that returns a formatted string with the product’s details.
        - getPriceWithTax() - a method that calculates the final price of the product with tax.

3. Create the PhysicalProduct Subclass:

- Inside src/models/PhysicalProduct.ts, create a PhysicalProduct class that extends Product.
    - Add a weight property (number) for physical products.
    - Override the getPriceWithTax() method to calculate a final price that includes a 10% tax rate.
    - Use a getter method to return the formatted weight in kilograms (e.g. “2.5 kg”).

4. Create the DigitalProduct Subclass:

- Inside src/models/DigitalProduct.ts, create a DigitalProduct class that extends Product.
    - Add a fileSize property (number) for digital products.
    - Override the getPriceWithTax() method to calculate a final price with no tax, since the digital products do not require tax.
    - Use a getter method to return the formatted file size in megabytes.

5. Create a Tax Calculator Utility:

- Inside src/utils/taxCalculator.ts, create a utility module to handle tax calculations.
    - Add a function calculateTax() that accepts a Product object and returns the price including tax.

6.Implement the Main Program:

- Inside src/main.ts, import the PhysicalProduct and DigitalProduct classes, and create instances of both.
- Use a loop to display the details of each product, calculate prices with tax, and display the final prices.
    - Hint: Utilize polymorphism to your advantage here.

7. Compile and Run the Program:

- Compile the TypeScript code:

    npx tsc
    
- Run the compiled JavaScript:

    node dist/main.js

## Tools

- HTML
- CSS
- JavaScript
- TypeScript

## Reflection Questions

While the basic structure was quite simple, it was challenging to navigate the assignment with all the terminal commands required to make the program operate.  I had some difficulty understanding some of the instructions, such as how to go about adding the tax calulator as a utility module and how to call it in the class methods.  Also, the more complex file and folder structure caused some issues with how I set up git.  With help, I was able to overcome the challenges.
