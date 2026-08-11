// Define the outer function
function outer() {

    // Create a variable and set its initial value to 0
    let count = 0;

    // Return an inner function
    // The inner function can access the 'count' variable
    return function () {

        // Increase count by 1
        count++;

        // Print the current value of count
        console.log(count);
    };
}

// Call outer() and store the returned inner function in counter
// The 'count' variable is remembered by the inner function
const counter = outer();

// Call counter() → count becomes 1
counter();

// Call counter() → count becomes 2
counter();

// Call counter() → count becomes 3
counter();
