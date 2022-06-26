/*
Title: cart-component.js
Author: Amanda Groves
Date: 26 June 2022
Modified by: Amanda Groves
Description: Cart classes and constructors
*/

class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa-solid fa-cart-shopping"></i> (<span id='cart-count'></span>)
        `;
    }
}

customElements.define("cart-component", CartComponent);