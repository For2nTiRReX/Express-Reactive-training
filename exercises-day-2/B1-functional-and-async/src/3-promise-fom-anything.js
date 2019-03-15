/**
 * "Promise from anything"
 *
 * INTRO:
 * You can decide how your promise logic goes.
 * Promise can be made out of anything.
 *
 * */


const myPromise = new Promise( (resolve) => {
    resolve(1234);
});

function asyncPromiseFactory() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve(4321);
        }, 2000);
    });
}


/**
 *
 * TASK:
 * Receive values from promises
 */
myPromise.then((num) => {
    console.log(num)
    
})

asyncPromiseFactory().then((num) => {
    console.log(num)

})