
/**
  #TASK:
    1. Learn / remind yourself possible actions using API for the arrays.

  More:
  {@see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array}
*/

// Elements iteration:
[1,2,3,4,5].forEach(element => {});

// Mapping
// Elements transformation:
const mapped = [1,2,3,4,5].map((nr) => 'Chapter #'+nr);

// Filtering
// Change number of elements:
const oddNumbers = [1,2,3,4,5].filter((nr) => (nr%2));

// Check of condition
// All elements need to fulfill condition (predicate function)
const allLowerThan10 = [1,2,3,4,5].every((nr) => nr < 10);

// "Reducing" elements
// Where map and filter can't - you can use reduce!
const sumOfElements = [1,2,3,4,5].reduce((acc, value) => acc + value);

/**
    #2 TASK:
    Use reduce to change this string to object :
    {
      name: '', lastName: '', age: '', profession: ''
    }
*/
const userOptions = 'name,lastName,age,profession';

const names = userOptions.split(',').reduce((obj, key) => {
  obj[key] = '';
  return obj;
}, {});

console.log(names);