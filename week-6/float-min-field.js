/*
  Title: float-min-field.js
  Author: Amanda Groves
  Date: 07/03/2022
  Description: export module for float-min-field
*/

export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }

    validate() {
        if (parseFloat(this.field) > this.min) {
            return true;
        }

        return false;
    }

    getMessage() {
        return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
    }
}