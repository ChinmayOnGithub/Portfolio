// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

// States of a Promise:

// Pending: Initial state, waiting for resolution or rejection.
// Fulfilled: resolve is called → .then executes.
// Rejected: reject is called → .catch executes.

// Key Methods:

// .then(callback): Handles successful resolution of the promise.
// .catch(callback): Handles rejection or errors.
// .finally(callback): Executes after the promise settles, regardless of success or failure.

// How resolve and reject Work:

// resolve(value): Marks the promise as fulfilled and passes value to.then.
// reject(reason): Marks the promise as rejected and passes reason to.catch.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let success = false;
            if (success) {
                resolve("Data fetched successfully.");
            } else {
                reject("Error fetching data");
            }

        }, 300);
    });
}


// Consuming that promise
fetchData()
    .then((result) => {
        console.log(result);

    }).catch((err) => {
        console.log(err);

    });