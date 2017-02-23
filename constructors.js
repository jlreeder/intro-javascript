'use strict';

function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

let amy = new Cat("Amy", "Bo");
let yma = new Cat("Yma", "Jason");
console.log(amy.cuteStatement());

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};

console.log(amy.cuteStatement());

Cat.prototype.meow = function () {
  return "meeeeeeeeeeeowe";
};

console.log(amy.meow());

amy.meow = function () {
  return "roar!!";
};

amy.name = "Amy the Tiger";

console.log("Yma's meow");
console.log(yma.meow());

console.log(`${amy.name}'s meow`);
console.log(amy.meow());

console.log(amy.owner);
