const p1 = Promise.resolve("HTML");
// Promise.resolve() ek fulfilled Promise banata hai
// Is Promise ki value "HTML" hai

const p2 = Promise.resolve("CSS");
// Ek fulfilled Promise banaya
// Iski value "CSS" hai

const p3 = Promise.resolve("JavaScript");
// Ek fulfilled Promise banaya
// Iski value "JavaScript" hai


// Promise.all() teeno Promises ke complete hone ka wait karta hai
Promise.all([p1, p2, p3])

    .then((result) => {
        // Teeno Promises ki values ek array mein milengi
        console.log(result);
    })

    .catch((error) => {
        // Agar koi Promise reject/fail ho jaye,
        // to catch() error ko handle karega
        console.log(error);
    });
