

let number = [1, 2, 2, 4, 0, 3, 5, 6];
let even = []

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 == 0) {
//         even.push(number[i]);
//     }
// }

// console.log(even);
// console.log(number);


// Foreach loop in js

number.forEach(function (digit) {
    if (digit == 0) {
        return;
    }

    even.push(digit);

});

console.log(even);


// Different types of loops in JavaScript

// 1. For loop
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

// 2. While loop
let i = 0;
while (i < number.length) {
    console.log(number[i]);
    i++;
}

// 3. Do-while loop
i = 0;
do {
    console.log(number[i]);
    i++;
} while (i < number.length);

// 4. For-in loop (used for iterating over object properties)
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}

// 5. For-of loop (used for iterating over iterable objects like arrays)
for (let value of number) {
    console.log(value);
}