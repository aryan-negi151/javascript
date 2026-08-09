// Create a function named getData
function getData() {

    // Return a Promise
    // The Promise will give us the result in the future
    return new Promise((resolve) => {

        // Wait for 2 seconds before executing the code
        setTimeout(() => {

            // Resolve the Promise with the message "Data Received"
            resolve("Data Received");

        }, 2000); // 2000 milliseconds = 2 seconds
    });
}


// Create an asynchronous function
// "async" allows us to use "await" inside the function
async function displayData() {

    // Call getData() and wait for the Promise to complete
    const data = await getData();

    // Print the received data to the console
    console.log(data);
}


// Call the displayData() function
displayData();
