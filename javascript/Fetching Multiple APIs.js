// Fetch user data from the API
// fetch() returns a Promise
const userAPI = fetch("https://jsonplaceholder.typicode.com/users/1");

// Fetch post data from the API
const postAPI = fetch("https://jsonplaceholder.typicode.com/posts/1");

// Fetch todo data from the API
const todoAPI = fetch("https://jsonplaceholder.typicode.com/todos/1");


// Promise.all() waits for all three API requests to complete
Promise.all([userAPI, postAPI, todoAPI])

    // 'responses' contains the responses of all three API requests
    .then((responses) => {

        // Convert each response into JSON
        // res.json() also returns a Promise
        return Promise.all(
            responses.map(res => res.json())
        );
    })

    // 'data' contains the actual JSON data from all three APIs
    .then((data) => {

        // Print all the received data
        console.log(data);
    })

    // If any Promise/API request fails, catch() handles the error
    .catch((error) => {

        // Print the error
        console.log(error);
    });
