// Create Promise 1
const p1 = new Promise((resolve) => {

    // Wait for 3000 milliseconds = 3 seconds
    setTimeout(() => {

        // The Promise will resolve after 3 seconds
        resolve("First");

    }, 3000);
});


// Create Promise 2
const p2 = new Promise((resolve) => {

    // Wait for 1000 milliseconds = 1 second
    setTimeout(() => {

        // The Promise will resolve after 1 second
        resolve("Second");

    }, 1000);
});


// Promise.race() creates a race between both Promises
// It returns the result of the Promise that settles FIRST
Promise.race([p1, p2])


// The result of the first settled Promise is received here
.then((result) => {

    // Print the result to the console
    console.log(result);
});
