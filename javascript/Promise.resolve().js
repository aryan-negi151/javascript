// Ek Promise ko successfully resolve kiya
// "Hello JavaScript" is Promise ki value hai
Promise.resolve("Hello JavaScript")

// Promise successfully resolve hone ke baad
// .then() automatically execute hoga
.then((result) => {

    // Resolved value "result" variable me milegi
    console.log(result);
});
