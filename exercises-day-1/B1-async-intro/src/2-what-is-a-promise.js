/**
 * "What is a Promise ?"
 * 
 * INTRO: 
 * Hopefully in JavaScript you have an Object that will "flatten" your 
 * asynchronous operations, allows you to write them in "one level"
 * 
 * This object is called: Promise
 * 
 * Promise can be build out of anything.
 * You can decide how its logic should work inside, using two callback functions:
 * resolve or reject
 * 
 * then 
 * 
 * you can attach more and more asynchronous or synchronous operations
 * chaining them with Promise API
 * 
 * let see how our 1st example will looks like written using Promises   
 */

const bankAPI = {
    fetchCurrencies() {
        const plnTo = {
            USD: 3.78602,
            EUR: 4.32559,
            PLN: 1
        };
        return Promise.resolve(plnTo);
    }
};

const cartAPI = {
    getProducts() {
        const goodiesInside = [
            {name: 'Kitchen soap', price: 2.99},
            {name: 'Lemons 1kg', price: 15.23},
        ];
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(goodiesInside);
            }, 1000);
        })
    }
};

/**
 * 
 * THE GOAL:
 * Call the API with proper Promise usage
 */



 