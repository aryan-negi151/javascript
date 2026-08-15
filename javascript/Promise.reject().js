// Promise ko manually reject kiya
// "Something Went Wrong" error message hai
Promise.reject("Something Went Wrong")

// Agar Promise reject hota hai,
// to .catch() automatically execute hota hai
.catch((error) => {

    // Reject hua hua error yahan "error" variable me milega
    console.log(error);
});
