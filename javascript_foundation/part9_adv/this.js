const person = {
    name: "CHinmay",
    greet() {
        console.log(`My name is ${this.name}`);
    }
}

console.log(person);


person.greet();

const greetFunction = person.greet
greetFunction();

const boundGreet = person.greet.bind({ name: "Kadambari" });
boundGreet();


// bind, call and apply


