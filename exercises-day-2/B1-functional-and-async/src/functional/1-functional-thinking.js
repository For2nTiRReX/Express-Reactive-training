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
const backendApiRequest = () => ['marian', 'stefan', 'jadwiga', 'henryka', 'anna'];

// SOLVE:
const response = backendApiRequest();

const result = response;

console.log(result);
