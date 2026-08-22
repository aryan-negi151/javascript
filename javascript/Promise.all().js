const p1 = Promise.resolve("HTML");
// Promise.resolve() creates a fulfilled Promise
// The value of this Promise is "HTML"

const p2 = Promise.resolve("CSS");
// Creates another fulfilled Promise
// The value of this Promise is "CSS"

const p3 = Promise.resolve("JavaScript");
// Creates another fulfilled Promise
// The value of this Promise is "JavaScript"


// Promise.all() waits for all three Promises to complete
Promise.all([p1, p2, p3])

    .then((result) => {
        // The values of all three Promises are returned in an array
        console.log(result);
    })

    .catch((error) => {
        // If any Promise is rejected or fails,
        // catch() handles the error
        console.log(error);
    });
