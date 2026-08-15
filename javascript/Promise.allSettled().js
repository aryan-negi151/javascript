// Promise 1 create kiya
// Ye Promise successfully resolve hoga
const p1 = Promise.resolve("Success");

// Promise 2 create kiya
// Ye Promise reject hoga
const p2 = Promise.reject("Error");

// Promise 3 create kiya
// Ye Promise successfully resolve hoga
const p3 = Promise.resolve("Done");

// Promise.allSettled() sabhi Promises ka result check karta hai
// Chahe koi Promise resolve ho ya reject, ye sabka result return karega
Promise.allSettled([p1, p2, p3])

// Jab teeno Promises settle ho jayenge,
// .then() ke andar result aa jayega
.then((result) => {

    // Sabhi Promises ka result console me print hoga
    console.log(result);
});
