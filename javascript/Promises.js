// Ek naya Promise create kiya
let promise = new Promise((resolve, reject) => {

    // Promise ko successfully resolve kar diya
    // "Success" iska result/value hai
    resolve("Success");

});


// Promise successful hone ke baad
// .then() automatically execute hoga
promise.then((result) => {

    // Resolved value "result" variable me milegi
    console.log(result);

});
