// Promise 1 banaya
const p1 = new Promise((resolve) => {

    // 3000 milliseconds = 3 seconds wait karega
    setTimeout(() => {

        // 3 seconds baad Promise resolve hoga
        resolve("First");

    }, 3000);
});


// Promise 2 banaya
const p2 = new Promise((resolve) => {

    // 1000 milliseconds = 1 second wait karega
    setTimeout(() => {

        // 1 second baad Promise resolve hoga
        resolve("Second");

    }, 1000);
});


// Promise.race() dono Promises me race karayega
// Jo Promise SABSE PEHLE settle hoga,
// uska result return karega
Promise.race([p1, p2])


// Jo Promise pehle complete hoga,
// uski value result me milegi
.then((result) => {

    // Result console me print hoga
    console.log(result);
});
