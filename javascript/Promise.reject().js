// Manually reject a Promise
// "Something Went Wrong" is the rejection message
Promise.reject("Something Went Wrong")

// If the Promise is rejected,
// .catch() will automatically execute
.catch((error) => {

    // The rejected error is received in the "error" variable
    console.log(error);
});
