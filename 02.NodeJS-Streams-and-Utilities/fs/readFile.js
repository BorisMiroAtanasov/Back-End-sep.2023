const { isUtf8 } = require('buffer');
const { log } = require('console');
const fs = require('fs');


const input = fs.readFileSync("./input.txt", "utf-8");

console.log(input);