const fs = require("fs");
let text = fs.readFileSync("Module.txt", "utf-8");
text = text.replace("Yo", "Hey");
console.log("The content of the file is ")
console.log(text);

console.log("Creating a new file....");
fs.writeFileSync("abhirup.txt", text); //Creating a new file abhirup.txt and insert the content of 'text' in it