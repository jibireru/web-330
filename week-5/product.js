/*
Title: product.js
Author: Amanda Groves
Date: 26 June 2022
Modified by: Amanda Groves
Description: constructor for products
*/

export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }
}