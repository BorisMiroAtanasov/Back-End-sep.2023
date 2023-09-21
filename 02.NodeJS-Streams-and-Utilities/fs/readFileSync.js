const { isUtf8 } = require('buffer');

const fs = require('fs');


const input = fs.readFileSync("./input.txt", "utf-8");

console.log(input);

console.log("Sync reading of file has ended!");