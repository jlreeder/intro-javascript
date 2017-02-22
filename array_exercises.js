/*jslint node: true */
'use strict';

function myUniq(array) {
  let result = [];

  array.forEach((num) => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });

  return result;
}

// console.log(myUniq([1, 2, 1, 3, 3]))

function twoSum(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let el1 = array[i];
    for (let j = i + 1; j < array.length; j++) {
      let el2 = array[j];
      if (el1 + el2 === 0) {
        result.push([i,j]);
      }
    }
  }
  return result;
}


// console.log(twoSum([-1, 0, 2, -2, 1]));

function myTranspose(array) {
  let result = [];

  for (var i = 0; i < array.length; i++) {
    let row = [];

    // TODO: The linter is mad. Is there a better way?
    array.forEach((subArray) => {
      row.push(subArray[i]);
    });

    result.push(row);
  }

  return result;
}

console.log(myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ])
);
