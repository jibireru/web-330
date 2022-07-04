/*
  Title: finance-calculator.js
  Author: Amanda Groves
  Date: 07/03/2022
  Description: export module for FinanceCalculator
*/

export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;
    static calculateFutureValue(monthlyPayment, rate, years) {
        const months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;
        let futureValue = presentValue * Math.pow(interestRate, months);
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        });
        return currencyFormatter.format(field);
    }
}