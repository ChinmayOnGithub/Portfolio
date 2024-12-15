let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} car got started in ${this.year}`;
    }
}

// console.log(car.start());

// but we cant use it more than once
// hence we do the normal this and new keyword method


// Prototype and prototipical chaim
function Animal(type) {
    this.type = type;
}

Animal.prototype.speak = function () {
    return `${this.type} makes a sound`;
}

let Dog = new Animal("dog");
// console.log(Dog.speak());

Array.prototype.chinmay = function () {
    return `custom method by ${this}`
}

let arr = [1, 2, 3]
// console.log(arr.chinmay());


//  ====================== CLASS & INHERITANCE ==========================

// class has methods and not functions
// and dont need a function keyword
class Vehical {
    constructor(make, model) {
        this.make = make
        this.model = model
    }

    start() {
        return `${this.model} belong to ${this.make}.`;
    }

}

class Car extends Vehical {
    drive() {
        return `${this.make} this is an inheritance example`
    }
}

let myCar = new Car("Tata", "Safari");
// console.log(myCar.start());
// console.log(myCar.drive());


// ====================== Encapsulation ==========================

// Restricts direct access to the class-objects data (using # symbol so that no one outside the class can access the var)
// Can not use it outside the class
// Only using some specified methods
class BankAccount {
    #balance = 0

    deposite(amount) {
        this.#balance += amount
        return this.#balance
    }

    getBalance() {
        return `$${this.#balance}`
    }
}

let Chinmay = new BankAccount()
Chinmay.deposite(500)
let balance = Chinmay.getBalance()
// console.log(balance);

// console.log(Chinmay.balance);

// ==================== Abstraction ===========================
// Abstraction
// Hiding the complexity underneath the program
// Simplifying the whole process by simplest methods in the class e.g. start() display()... or may be single function doing all the tasks. while also logging the process.

class CoffeeMaker {
    start() {
        // connect to DB
        // other complex things
        return `Connected. coffee maker has started...`
    }

    brewCoffee() {
        return `Your coffee is ready`
    }

    pressStartButton() {
        let msg1 = this.start();
        let msg2 = this.brewCoffee();
        return `${msg1}\n${msg2}`
    }
}

let myMachine = new CoffeeMaker();
// console.log(myMachine.pressStartButton());

// ========= Polymorphism ====================

class Bird {
    fly() {
        return `Fying...`;
    }
}

class Penguine extends Bird {
    fly() {
        return `Penquines can't fly.`;
    }
}

let sparrow = new Bird();
let penguine = new Penguine();

// console.log(sparrow.fly());
// console.log(penguine.fly());


// ============== static method ===========
/* 
only class itself can use that method directly and not through any object

static can be : variable, method... anything inside the class
*/

class Meri {
    static start(a, b) {
        return a + b
    }
}

let my = new Meri()
// console.log(my.start(1, 5)); // won't work
// console.log(Meri.start(1, 5));


// =================== Getters and Setters ==========================

class Employee {
    #salary;

    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary can not be negative");

        }
        this.name = name
        this.#salary = salary
    }

    get salary() {
        return `You are not allowed to see this. ${this.#salary}`;
    }

    set salary(value) {
        if (value < 0) {
            console.error(`Invalid amount.`);
        }
        else {
            this.#salary = value;
        }
    }
}
let emp = new Employee(`chinmay`, 200000);
emp.salary = -4000
console.log(emp.salary);