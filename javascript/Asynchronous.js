// Print "Start" immediately
console.log("Start");

// setTimeout() runs the function after 3 seconds (3000 milliseconds)
// JavaScript does not wait here; it continues executing the next line
setTimeout(() => {
    // This message will be printed after 3 seconds
    console.log("Task Finished");
}, 3000);

// Print "End" immediately
// This runs before "Task Finished" because setTimeout is asynchronous
console.log("End");
