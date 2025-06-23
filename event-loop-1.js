const fs = require('fs');
const a = 100;

setImmediate(() => console.log("set Immediate"));

fs.readFile("./txt-file.txt", "utf-8", () => {
    console.log("file reading CB");
});

setTimeout(() => console.log("set Timeout"), 0);

function printA() {
    console.log("a=", a);
}

printA();

console.log("last line of the file");

