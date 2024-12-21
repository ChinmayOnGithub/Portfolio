function sayHello() {
    console.log("hello world");

}

console.log(`wait for 2 seconds`);


setTimeout(() => {
    sayHello();
}, 2000);