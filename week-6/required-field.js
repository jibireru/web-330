/*
  Title: required-field.js
  Author: Amanda Groves
  Date: 07/03/2022
  Description: Export Module for required-field
*/

export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        if(this.field) {
            return true;
        }
        return false;
    }

    getMessage() {
        return `${this.name} is a required field.`;
    }
}