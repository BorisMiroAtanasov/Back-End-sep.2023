

const { log } = require('console');
const fs = require('fs');


const input = fs.readFile("./input.txt", "utf-8",(err, text ) =>{
    if(err){
        console.log(err);
        return 
    }
console.log(text);
});

console.log(input);

console.log("Async reading of file has ended!");