const userAPI = fetch("https://jsonplaceholder.typicode.com/users/1");
const postAPI = fetch("https://jsonplaceholder.typicode.com/posts/1");
const todoAPI = fetch("https://jsonplaceholder.typicode.com/todos/1");

Promise.all([userAPI, postAPI, todoAPI])
.then((responses) => {
    return Promise.all(responses.map(res => res.json()));
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});