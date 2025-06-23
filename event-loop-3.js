const fs = require('fs');
const a = 100;

setImmediate(() => console.log("set Immediate"));

setTimeout(() => console.log("set Timeout"), 0);


Promise.resolve("Promise").then(() => console.log("promise"));

fs.readFile("./txt-file.txt", "utf-8", () => {
    setTimeout(() => console.log("2nd timer"), 0);

    process.nextTick(() => console.log("2nd process.nextTick"));

    setImmediate(() => console.log("2nd set Immediate"));

    console.log("file reading CB");
});


process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log("a=", a);
}

printA();

console.log("last line of the file");