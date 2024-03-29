// Equality check
var x = 10;
if (x === "10") {
  console.log("equal");
} else {
  console.log("not equal");
}

// 5 == 5 // true
// 5 == "5" // true
// 5 === "5" // false

// 5 != "5" // false
// 5 !== "5" // true

// Falsey values
var x = 3;

if (null) {
  x = x + 1;
}

if (false) {
  x = x + 1;
}

if (0) {
  x = x + 1;
}

if ("") {
  x = x + 1;
}

var thing; // this variable is instantiated but undefined

if (thing) { // value of the thing variable is undefined
  x = x + 1;
}

if (3 / "bob") { // NaN (Not a Number)
  x = x + 1;
}

console.log(x);

// Functions
function printLyrics() {
  console.log("Now this is a story all about how");
  console.log("My life got flipped turned upside down");
  console.log("And I'd like to take a minute, just sit right there");
  console.log("I'll tell you how I became the prince of a town called Bel-Air");
}

printLyrics();

// Scope
var x = 100;
function addOne(num) {
  x = 1;
  return num + x;
}
console.log(x);
console.log(addOne(5));
console.log(x);

// JavaScript objects vs. Ruby classes

var boat = {
  name: "S. S. Minnow",
  color: "white",
  price: 20000,
  printInfo: function() {
    console.log(`The boat ${this.name} has a price of ${this.price}.`);
  }
};

console.log(boat);
console.log(boat.name);
boat.color = "red";
console.log(boat.color);
boat.printInfo();