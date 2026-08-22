// Successfully resolve a Promise
// "Hello JavaScript" is the value of the Promise
Promise.resolve("Hello JavaScript")

// After the Promise is successfully resolved,
// .then() will automatically execute
.then((result) => {

    // The resolved value is received in the "result" variable
    console.log(result);
});
