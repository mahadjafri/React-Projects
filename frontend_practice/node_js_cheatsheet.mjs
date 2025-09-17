//  JavaScript / Node.js Crash Cheat Sheet

console.log("Hello");   // Hello
console.error("Oops");  // prints error message in red

// Numbers and Math 
console.log(Math.round(3.6));   // 4
console.log(Math.floor(3.6));   // 3
console.log(Math.ceil(3.2));    // 4
console.log(Math.random());     // e.g. 0.5382


// Strings
console.log("Hello".toUpperCase());  // "HELLO"
console.log("Hello".toLowerCase());  // "hello"
console.log("Hello".includes("ll")); // true
console.log("Hello".replace("H", "J")); // "Jello"
console.log("Hello".split("e")); // [ 'H', 'llo' ]
console.log("  Hello  ".trim('ll')); // "Hello"
console.log("Hello".charAt(1)); // "e"
console.log("Hello".indexOf("e")); // 1
console.log("Hello".slice(1, 4)); // "ell"
console.log("Hello".substring(1, 4)); // "ell"
console.log("Hello".startsWith("He")); // true
console.log("Hello".endsWith("lo")); // true    
console.log(["Hello", "World"].join(" - ")); // "Hello, World"


// Arrays
const arr = [1, 2, 3];

arr.length;                  // 3
arr.push(4);                 // [1,2,3,4]
arr.pop();                   // removes 4
arr.shift();                 // removes 1
arr.unshift(0);              // adds 0 at start
arr.includes(2);             // true
arr.indexOf(3);              // 2

arr.map(x => x * 2);         // [0,4,6]
arr.filter(x => x > 1);      // [2,3]
arr.reduce((s, n) => s+n, 0);// 5
console.log("final arr", arr);

// Objects
const user = { name: "Mahad", age: 28 };

user.name;                   // "Mahad"
user["age"];                 // 28

const { name } = user;       // destructuring
console.log(name);           // "Mahad"

user.country = "Pakistan";   // add new key

// Sets and Maps

// Remove duplicates
const skills = ["Python","Django","Python"];
const unique = Array.from(new Set(skills)); // ["Python","Django"]

// Map (like dict with any key type)
const m = new Map();
m.set("Acme", ["Engineer"]);
m.get("Acme");               // ["Engineer"]


//loops
console.log("Printing For of Loop");
var arr2 = [4,3,2,1,0];
for (const num of arr2){
    console.log(num);       // 4 3 2 1 0 (value)
}

console.log("Printing For in Loop");
for (const num in arr2){
    console.log(num);        // 0 1 2 3 4 (index)
}

["a","b"].forEach(x => x + 5); // "a5", "b5"

// Functions
function greet(name="Stranger") {
  return `Hello, ${name}!`;
}
greet("Mahad");              // "Hello, Mahad!"
greet();                     // "Hello, Stranger!"

// Arrow function
const square = n => n * n;
square(5);                   // 25
const add = (a, b) => a + b;
add(2, 3);                   // 5

// Async/Await and Fetch
// Node >=18 supports fetch natively
async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await res.json();
  console.log(data.name, data.email);
}
getUser();

console.log("End of JS Crash Course");