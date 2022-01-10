// //Synchronous or blocking
// - line by line execution

// //Non-synchronous or non-blocking
// - line by line execution not guaranteed
// - callbackx will fire

const fs = require("fs");
// let text = fs.readFile("Module.txt", "utf-8", (err, data)=>{
//     console.log(err, data);
// });
// let text = fs.readFile("Module2.txt", "utf-8", (err, data)=>{
//     console.log(err, data);
// });
let text = fs.readFile("Module.txt", "utf-8", (err, data)=>{
    console.log(data);
});
console.log("This is a message");