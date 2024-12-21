// A closure is a function that "remembers" the variables from its lexical scope even after that scope has exited.This means the function retains access to the variables defined in its parent function, even when the parent function has finished executing.

//  #interview
function outer() {
    let counter = 4;
    return function () {
        counter++;
        return counter;
    }
}

let increment = outer();

console.log(increment());
console.log(increment());
console.log(increment());