// exporting the functions using CommonJS
// implemented in appC.js

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}

module.exports = {
    add,
    subtract,
    multiply
}