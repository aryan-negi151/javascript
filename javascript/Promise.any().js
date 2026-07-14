const p1 = Promise.reject("Error 1");

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Success"), 2000);
});

const p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});