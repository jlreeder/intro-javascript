/*jslint node: true */
'use strict';

Array.prototype.myUniq = function () {
  let uniqueArray = [];

  this.forEach( (el) => {
    if (!uniqueArray.includes(el)) {
      uniqueArray.push(el);
    }
  });

  return uniqueArray;
};


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
// console.log([1, 2, 1, 3, 3].myUniq());

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

Array.prototype.twoSum = function () {
  let sumLocs = [];

  for(let i = 0; i < this.length; i++) {
    for(let j = i+1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        sumLocs.push([i, j]);
      }
    }
  }

  return sumLocs;
};


// console.log(twoSum([-1, 0, 2, -2, 1]));
// console.log([-1, 0, 2, -2, 1].twoSum());

function myTranspose(array) {
  let result = [];

  for (var i = 0; i < array.length; i++) {
    let row = [];

    for(let j = 0; j < array.length; j++) {
      row.push(array[j][i]);
    }

    result.push(row);
  }

  return result;
}

Array.prototype.myTranspose = function () {
  let transposed = [];

  for(let i = 0; i < this.length; i++) {
    let row = [];

    for(let j = 0; j < this[i].length; j++) {
      row.push(this[j][i]);
    }

    transposed.push(row);
  }

  return transposed;
};


// console.log(myTranspose([
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8]
//   ])
// );

let grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];

console.log(grid.myTranspose());
