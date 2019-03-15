/**
 #1 TASK:
  Change the first letters of the names to uppercase and in new array.

 #2 TASK:
  What will you do if there are requirements change and you need to show list as:
    ..............Marian
    ..............Stefan
    .............Jadwiga
    .............Henryka
    ................Anna

 #3 TASK:
  What if one of the names is null? How to handle that?
 
*/

// There is some backend data - it comes to us as an array:
const backendApiRequest = () => ['marian', 'stefan', 'jadwiga', 'henryka', 'anna', null];

// SOLVE:
const response = backendApiRequest();

const firsToUpper = (name) => name.charAt(0).toUpperCase() + name.substr(1);
const paddStr = (padNumber = 20) => (str) => str.padStart(padNumber, '.');
const isNotNull = (obj) => !!obj;

const result = response.filter(isNotNull).map(firsToUpper);
const result2 = response.filter(isNotNull).map(firsToUpper).map(paddStr(10)).join('\n');

console.log(response);
console.log(result);
console.log(result2);