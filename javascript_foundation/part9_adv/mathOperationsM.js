// capital M in the name is for MODULES 
// learn exporting and importing 
// these functions are imported in the appM.js. check it out

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}