/**
 * Demonstrates the usage of primitive data types in JavaScript.
 * 
 * Primitive data types covered:
 * - Numbers
 * - Booleans
 * - Null & Undefined
 * - Strings
 * - Symbols
 * 
 * Examples include:
 * - Creating and using numbers
 * - Creating and using booleans
 * - Handling null and undefined values
 * - Creating and using strings with concatenation and interpolation
 * - Creating and comparing symbols
 */

// Numbers
let balance = 120; // A primitive number
let anotherNumber = new Number(120); // A number object (not recommended for general use)

// Boolean
let isActive = false; // A primitive boolean
// let isActive2 = new Boolean(false); // A boolean object (not recommended)

// Null & Undefined
let firstname; // Declared but not initialized, hence undefined

// Strings
let username = "chinmay"; // A string using double quotes
let lastname = 'patil'; // A string using single quotes
let para = username + " " + lastname; // String concatenation
console.log(username); // Logs "chinmay"
console.log(lastname); // Logs "patil"
console.log(para); // Logs "chinmay patil"

let paragraph = `my name is ${username} ${lastname}.`; // String interpolation
console.log(paragraph); // Logs "my name is chinmay patil."

// Symbols
let sm1 = Symbol("chinmay"); // A symbol with description "chinmay"
let sm2 = Symbol("chinmay"); // Another symbol with the same description
console.log(sm1 == sm2); // Logs false, as symbols are unique

console.log(sm1 == sm2);



