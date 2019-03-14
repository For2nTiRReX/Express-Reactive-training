/**
 * "Promise from anything"
 * */


const myPromise = new Promise( (resolve) => {
    resolve(1234);
});

const myAsyncPromise = new Promise( (resolve) => {
    setTimeout(() => {
        resolve(4321);
    }, 2000);
});