'use strict';

function Animal(name, owner) {
  this.name = name;
  this.owner = owner;
}

Animal.prototype.eat = function () {
  return "MMM food";
};

Function.prototype.inherits = function (ParentClass) {
  this.prototype = Object.create(ParentClass.prototype);
};

Cat.inherits(Animal);

function Cat(name, owner) {
  Animal.call(this, name, owner);
}

Cat.prototype.cuteStatement = function () {
  return `${this.owner} loves ${this.name}`;
};

let amy = new Cat("Amy", "Bo");
let yma = new Cat("Yma", "Jason");

console.log(amy.cuteStatement());
console.log(amy.eat());

Cat.prototype.cuteStatement = function () {
  return `Everyone loves ${this.name}`;
};

// console.log(amy.cuteStatement());

Cat.prototype.meow = function () {
  return "meeeeeeeeeeeowe";
};

// console.log(amy.meow());

amy.meow = function () {
  return "roar!!";
};

amy.name = "Amy the Tiger";

// console.log("Yma's meow");
// console.log(yma.meow());

// console.log(`${amy.name}'s meow`);
// console.log(amy.meow());

// console.log(amy.owner);
