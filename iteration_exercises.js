function bubbleSort(array, callback) {
  let lastIteration = false;

  while (lastIteration === false) {
    let switched = false;

    for (var i = 0; i < array.length; i++) {
      let el1 = array[i];
      let el2 = array[i + 1];

      if (callback(el1, el2)) {
        let temp = el1;
        array[i] = el2;
        array[i+1] = temp;
        switched = true;
      }
    }

    if (switched === false) { lastIteration = true; }
  }

  return array;
}

function defaultCallback(el1, el2) {
  return el1 > el2;
}

Array.prototype.bubbleSort = function (callback = defaultCallback) {
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;

    for(let i = 0; i < this.length; i++) {
      if (callback(this[i], this[i+1])) {
        let tmp = this[i];
        this[i] = this[i+1];
        this[i+1] = tmp;

        isSorted = false;
      }
    }
  }

  return this;
};


// console.log(
//   bubbleSort([3, 2, 5, 7, 1], (el1, el2) => el2 < el1 )
// );

console.log(
  [3, 2, 5, 7, 1].bubbleSort((el1, el2) => el2 > el1 )
);
console.log(
  [3, 2, 5, 7, 1].bubbleSort()
);

function substrings(string) {
  let result = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      let substring = string.slice(i,j);
      if (!result.includes(substring)) { result.push(substring); }
    }
  }
  return result;
}

String.prototype.substrings = function () {
  let result = [];

  for(let i = 0; i < this.length; i++) {
    for(let len = 1; i + len <= this.length; len++) {
      result.push(this.slice(i, i + len));
    }
  }

  return result;
};


// console.log(substrings('agassi'));
console.log(substrings('abc'));
console.log("abc".substrings());
