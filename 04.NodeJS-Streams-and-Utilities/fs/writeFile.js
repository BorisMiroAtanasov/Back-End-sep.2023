const fs = require("fs");

const text = 'Mnogo obicham NODE JS, osobenno express!';

fs.writeFile("./output.txt", text, "utf-8", (err)=> {
    if(err){
        console.log("Unsuccsesful file saving ");
    }

    console.log("Succesfully saved file");
});