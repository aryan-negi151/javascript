// Create a new Promise
let promise = new Promise((resolve, reject) => {

    // Successfully resolve the Promise
    // "Success" is the result/value of the Promise
    resolve("Success");

});


// After the Promise is successfully resolved,
// .then() will automatically execute
promise.then((result) => {

    // The resolved value is received in the "result" variable
    console.log(result);

});
