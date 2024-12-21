//  This is older method to import functions from other files 
// but many old software uses it.
// Its importing the functions from mathOperationsC.js
// C stands for commonJS

const mathOperations = require("./mathOperationsC.js");

console.log(mathOperations.add(2, 6));
