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





