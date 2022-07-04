/*
  Title: float-field.js
  Author: Amanda Groves
  Date: 07/03/2022
  Description: Export Module for float-field
*/

export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        let parseForNaN = parseFloat(this.field);
        return !isNaN(parseForNaN);
    }

    getMessage() {
        return `${this.name} must be a float value, You entered ${this.field}`;
    }
}