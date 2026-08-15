// Promise 1 banaya
// Ye immediately reject hoga
const p1 = Promise.reject("Error 1");


// Promise 2 banaya
// Ye 2 seconds ke baad resolve hoga
const p2 = new Promise((resolve) => {

    // 2000 milliseconds = 2 seconds
    setTimeout(() => {

        // 2 seconds baad Promise successful hoga
        resolve("Success");

    }, 2000);
});


// Promise 3 banaya
// Ye bhi immediately reject hoga
const p3 = Promise.reject("Error 3");


// Promise.any() ka use kiya
// Ye promises me se jo PEHLA successfully resolve hoga,
// uska result return karega
Promise.any([p1, p2, p3])


// Jab koi ek Promise successfully resolve ho jayega,
// .then() execute hoga
.then((result) => {

    // Successful Promise ki value print hogi
    console.log(result);
})


// Agar SABHI Promises reject ho jayein,
// tab .catch() execute hoga
.catch((error) => {

    // Error print hoga
    console.log(error);
});
