const fs = require('fs');
const a = 100;

setImmediate(() => console.log("set Immediate"));

setTimeout(() => console.log("set Timeout"), 0);

Promise.resolve("Promise").then(() => console.log("promise"));

fs.readFile("./txt-file.txt", "utf-8", () => {
    console.log("file reading CB");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    console.log("process.nextTick")
});

function printA() {
    console.log("a=", a);
}

printA();

console.log("last line of the file");