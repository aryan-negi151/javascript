// Create Promise 1
// This Promise will be successfully resolved
const p1 = Promise.resolve("Success");

// Create Promise 2
// This Promise will be rejected
const p2 = Promise.reject("Error");

// Create Promise 3
// This Promise will be successfully resolved
const p3 = Promise.resolve("Done");

// Promise.allSettled() waits for all Promises to settle
// It returns the result of every Promise, whether resolved or rejected
Promise.allSettled([p1, p2, p3])

// When all three Promises are settled,
// the results are received inside .then()
.then((result) => {

    // Print the results of all Promises to the console
    console.log(result);
});
