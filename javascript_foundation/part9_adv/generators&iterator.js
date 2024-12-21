// very very rarely used

// A generator is a special type of function in JavaScript that can pause its execution and later resume it.Unlike regular functions, which execute completely when called, generators produce a series of values on - demand using the yield keyword.

// function that can only run limited times . here only 3 hits allowed
// A generator function that yields values only 3 times (3 hits allowed through iteration)

// generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;

}

let gen = numberGenerator();
let gen2 = numberGenerator();

// the next() keyword keeps the track of the next value.
// next() is called Iterator.
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen2.next().value);
console.log(gen2.next().value);


/* An iterator is an object that provides a mechanism to sequentially access elements in a collection, one at a time.An iterator must implement the next() method, which returns an object with two properties:

    value: The next value in the sequence.
    done: A boolean indicating whether the iteration is complete. 
*/