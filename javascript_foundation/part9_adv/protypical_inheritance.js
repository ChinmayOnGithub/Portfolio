

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    // console.log(`My name is ${this.name}`);
};

let chinu = new Person("Chinmay");
chinu.greet();


// ===========================================
// Primitive types like string, number, and boolean are not objects, but JavaScript provides 'wrapper objects' to access their methods.
let str = "Chinmay";
console.log(str.__proto__); // Points to String.prototype
console.log(str.__proto__.__proto__); // Points to Object.prototype
console.log(str.__proto__.__proto__.__proto__); // null (end of prototype chain)



// ===========================================

const p1 = {
    fname: "Chinmay",
    lname: "Patil",
    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

const p2 = Object.create(p1); // This sets p2's prototype (__proto__) to p1, meaning p2 inherits properties and methods from p1.

// console.log(p2.getFullName());
// __proto__ is a reference to the prototype of the object. 
// When a property or method is not found directly on the object, JavaScript checks its __proto__ for the property or method.
// This process continues up the prototype chain until it either finds the property/method or reaches null (the end of the chain).


// console.log(p2.__proto__);




// Avoid modifying __proto__ directly as it can lead to unpredictable behavior and bugs.
// Instead, use Object.create() to set up inheritance or Object.getPrototypeOf() and Object.setPrototypeOf() to work with prototypes safely.

// These methods inside the prototype are called wrapper classes


// consider this example
const g1 = {
    xg1: "I am inside g1"
};
const g2 = {
    xg2: "I am inside g2",
    __proto__: g1 // point to g1 (pointer reference)
};
const g3 = {
    xg3: "I am inside g3",
    __proto__: g2
};

console.log(g3);

// ===========================
// Each class in JavaScript has a prototype property that defines methods and properties shared by all instances of the class.
// Each object has a __proto__ property that points to the prototype of its constructor function.
// Example:
// 1. Class/Constructor -> prototype
// 2. Object -> __proto__

class Student {
    constructor() {
        this.fname = "Chinmay";
    }

    getName() {
        return this.fname;
    }
}

let chini = new Student(); // this automatically sets the chini.__proto__=Student.prototype


// what is the difference between the __proto__ and prototype





