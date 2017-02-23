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

// console.log(
//   mySort([3, 2, 5, 7, 1], (el1, el2) => el2 < el1 )
// );

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

// console.log(substrings('agassi'));
