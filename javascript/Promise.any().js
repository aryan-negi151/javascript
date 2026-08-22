// Create Promise 1
// This Promise will be rejected immediately
const p1 = Promise.reject("Error 1");

// Create Promise 2
// This Promise will resolve after 2 seconds
const p2 = new Promise((resolve) => {

    // 2000 milliseconds = 2 seconds
    setTimeout(() => {

        // After 2 seconds, the Promise will be successfully resolved
        resolve("Success");

    }, 2000);
});

// Create Promise 3
// This Promise will also be rejected immediately
const p3 = Promise.reject("Error 3");

// Use Promise.any()
// It returns the result of the first Promise that successfully resolves
Promise.any([p1, p2, p3])

// When any one Promise successfully resolves,
// .then() will be executed
.then((result) => {

    // Print the value of the successful Promise
    console.log(result);
})

// If ALL Promises are rejected,
// .catch() will be executed
.catch((error) => {

    // Print the error
    console.log(error);
});
