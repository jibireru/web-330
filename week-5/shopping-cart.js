/*
Title: shopping-cart.js
Author: Amanda Groves
Date: 26 June 2022
Modified by: Amanda Groves
Description: use new generator function!
*/

export class ShoppingCart {
    constructor() {
        this._products = [];
    }

    count() {
        return this._products.length;
    }

    add(products) {
        this._products.push(products);
    }

    *iterator() {
        for (let product of this._products) yield product;
    }
}