// the capital first letter denotes thats its a Constructor and not a simple function.

function Person(name, age) {
    this.name = name;
    this.age = age;

}

// how `new` and `this` keywords are linked together.
function Car(make, model) {
    this.make = make
    this.model = model
}
let myCar = new Car("Toyota", "Camery");
// console.log(myCar);
let myNewCar = new Car("Tata", "Safari")
// console.log(myNewCar);


function Tea(type) {
    this.type = type
    this.describe = function () {
        return `this is a cup of ${this.type}`
    }
}
let lemonTea = new Tea("lemon tea")
// console.log(lemonTea.describe());




function Animal(species) {
    this.species = species
}
// adding prototype to a function
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`
}
let dog = new Animal("Dog")
// console.log(dog.sound());



// How to throw an error when there is no `new` keyword
function Drink(name) {
    if (!new.target) {
        throw new Error("Drink must be called with new keyword");
    }
    this.name = name
}
let tea = new Drink("Tea")
let coffee = Drink("coffeeeee")
// console.log(tea.name);
// console.log(coffee.name);
