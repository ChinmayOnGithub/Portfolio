// Numbers
let balance = 120
let anotherNumber = new Number(120)

// console.log(balance);
// console.log(anotherNumber);
// console.log(anotherNumber.valueOf());

// in js everything is Object


// console.log(typeof (anotherNumber));
// console.log(typeof (balance));

// Boolean
let isActive = false;
// let isActive2 = new Boolean(false); // not recommended

// null & undefined
let firstname;
// console.log(firstname);

// strings

let username = "chinmay"
let lastname = 'patil'
let para = username + " " + lastname
console.log(username);
console.log(lastname);
console.log(para);

let paragraph = `my name is ${username} ${lastname}.` // using those variables in there is called {String Interpolation}.
console.log(paragraph);


// Symbols

let sm1 = Symbol("chinmay")
let sm2 = Symbol("chinmay")

console.log(sm1 == sm2);



