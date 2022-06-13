/*Title: Restaurant App for WEB 330
Authors: Amanda Groves
Date:  12 June 2022
Modified By: Amanda Groves
Description: Restaurant App*/

import {Product} from "./product.js";

export class Appetizer extends Product
{
    constructor(name, price)
    {
        super(name, price);
    }
}