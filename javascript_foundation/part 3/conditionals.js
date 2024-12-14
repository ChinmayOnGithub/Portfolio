

/**
 * This script demonstrates various JavaScript concepts including conditionals, array manipulation, 
 * and creating both soft and hard copies of arrays. It also shows how to merge arrays.
 * 
 * Concepts covered:
 * - Conditional statements
 * - Array manipulation (accessing elements, creating copies, merging)
 * - Spread operator and slice method for copying arrays
 * 
 * @constant {boolean} isTrue - A boolean variable set to true.
 * @constant {Array<string>} teaFlavours - An array containing different types of tea.
 * @constant {string} firstTea - The first element of the teaFlavours array.
 * @constant {Array<string>} softCopyTeaFlavours - A soft copy of the teaFlavours array (same reference).
 * @constant {Array<string>} hardCopy - A hard copy of the teaFlavours array using the spread operator.
 * @constant {Array<string>} hardCopy2 - A hard copy of the teaFlavours array using the slice method.
 * @constant {Array<string>} merged - An array resulting from merging hardCopy and hardCopy2 arrays.
 */


let isTrue = true

if (isTrue) {
    console.log("Yes it's true");

}

let teaFlavours = ["green tea", "Black tea", "Oolong tea"];

let firstTea = teaFlavours[0];

// console.log(firstTea);

// Creating a Soft copy of array  (Both have the same reference in the memory)

let softCopyTeaFlavours = teaFlavours
// console.log(teaFlavours);
// teaFlavours.pop()
// console.log(softCopyTeaFlavours);


// To create HARD copy of the array (creating different array with different reference)

let hardCopy = [...teaFlavours]; // rest and spread operators
let hardCopy2 = teaFlavours.slice();

teaFlavours.pop()
// console.log(teaFlavours);
// console.log(hardCopy);

// merging two arrays

let merged = hardCopy.concat(hardCopy2);
console.log(merged)



// call bind apply methods  --- study on your own





