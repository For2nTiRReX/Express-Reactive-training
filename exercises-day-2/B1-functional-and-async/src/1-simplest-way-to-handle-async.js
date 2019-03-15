/**
 * 
 * In JavaScript the simplest way to achieve asynchronous operation
 * is using the fact of its Functions as First Class Citizens principle
 * 
 * #1: function can return other function
 * #2: function can accept function as an argument
 * 
 * Using (#1) we can talk about so called Callback Functions:
 */

const bankAPI = {
    fetchCurrencies(askForCurrencyFn) {
        const plnTo = {
            USD: 3.78602,
            EUR: 4.32559,
            PLN: 1
        };
        askForCurrencyFn(plnTo);
    }
};

const cartAPI = {
    getProducts(askForProductsFn) {
        const goodiesInside = [
            {name: 'Kitchen soap', price: 2.99},
            {name: 'Lemons 1kg', price: 15.23},
        ];
        setTimeout(() => {
            askForProductsFn(goodiesInside);
        }, 1000);
    }
};

/**
 * 
 * TASK:
 * 
 * How to access to "actual PLN - to other currencies" and calculate cart value in USD?
 * 
 * You need to fetch the currencies and the cart
 * Notice: both operations are asynchronous
 */

bankAPI.fetchCurrencies((bankCurrency) => {
    console.log(bankCurrency);
    cartAPI.getProducts((products) => {
        console.log(products)
    })
})

/**
 * 
 * THE PROBLEM:
 * 
 * Callbacks are good if we talking about one asnyc operation (e.g. events) with a "happy path"
 * But when we cannot determine if callback will resolve or will be rejected with error
 * and additionally we got one async operation after another...
 * 
 * that will lead us to so called "CALLBACK OF HELL"
 */

