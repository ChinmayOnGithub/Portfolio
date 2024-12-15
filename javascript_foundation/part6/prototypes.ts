// computer = { cpu: 12 }
// lenovo = {
//     screen: `HD`,
//     __proto__: computer
// }

// console.log(lenovo.__proto__);

// But its older way (dunder : double underscore methods)

// new method
// setPrototypeOf and getPrototypeOf
let genericCar = { tyres: 4 };

let tesla = { driver: `AI` };

Object.setPrototypeOf(tesla, genericCar);

// console.log(`tesla `, Object.getPrototypeOf(tesla));
