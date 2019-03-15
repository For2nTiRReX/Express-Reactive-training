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

const myAsyncPromise = new Promise( (resolve) => {
    setTimeout(() => {
        resolve(4321);
    }, 2000);
});

/**
 *
 * TASK:
 * Receive values from promises
 */
