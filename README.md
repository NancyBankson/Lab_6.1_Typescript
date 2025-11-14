# Dynamic Shopping Cart

## Overview

In this lab, we explored dynamic content creation.  I built a dynamic shopping cart app.  The app took input from the user and placed it in an object which was then pushed to an array.  I used DOM manipuation techniques suh as modifying elements, creating and appending new elements, and updating content dynamically using JavaScript.

## Features

The activity tasks included:

1. Add Products:

- Test adding products with different names and prices.
- Ensure each product appears in the list with the correct price.

2. Remove Products:

- Test removing products from the cart.
- Verify that the total price updates accurately after removing items.

3. Edge Cases:

- Attempt to add products with empty names or invalid prices and ensure the application handles these cases gracefully.

4. Enhance the App (Optional):

- Allow users to update the quantity of products in the cart and recalculate the total price.

## Tools

- HTML
- CSS
- JavaScript

## Reflection Questions

1. How did you dynamically create and append new elements to the DOM?

I began by using varaiables to get the elements from the document using getElementById.  I added an event listener to check for clicks to the add item button and then created an object using the input.  I created new elements using createElement and inerted content and html using innerHTML.  I then pushed the object to an array to keep track of the items, prices, and quantities.  When changes were made, I used replaceWith.

2. What steps did you take to ensure accurate updates to the total price?

To make sure the total price was accurate, I used the stored prices in the array and updated the total price using a function.

3. How did you handle invalid input for product name or price?

I handeled invalid input using conditionals which checked validity and returned an alert if the input was invalid.

4. What challenges did you face when implementing the remove functionality?

I didn't find the remove function that was provided helpful, so I created my own remove function within the event listener for the remove button.
