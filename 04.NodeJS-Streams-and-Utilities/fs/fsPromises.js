const { log } = require("console");
const fs = require("fs/promises");

const readFilePromises = fs.readFile("./input.txt", "utf-8");

readFilePromises.then((data) =>{
    console.log(data);
    fs.writeFile("./output.txt", data, "utf-8")
})