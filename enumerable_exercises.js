function myEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
  return array;
}


// function addOne(num) {
//   console.log(num + 1);
// }

// myEach([1,2,3], num => console.log(num + 1));

function myMap(array, callback) {
  let result = [];

  for (var i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }

  return result;
}

// console.log(myMap([1,2,3], num => num + 1));

function myInject(array, callback, acc) {

  if (!acc) { acc = array.shift(); }

  array.forEach((el) => { acc = callback(acc, el); });

  return acc;
}

console.log(myInject([1, 2, 3], (acc, el) => acc + el, 5));
console.log(myInject([1, 2, 3], (acc, el) => acc + el ));
