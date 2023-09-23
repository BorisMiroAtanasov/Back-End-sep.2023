const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require("../data/cats.json");


module.exports((req, res) => {
    const pathName = url.parse(req.url).pathname;


//    console.log(pathNames);

if(pathName === "/" && req.method ==="GET"){

    let filePath = path.normalize(
        path.join(__dirname,"./views/home/index.html")
    );

    fs.readFile(filePath, (err, data) =>{
        if(err){
            console.log(err);
            res.writeHead(404,{
                "Content-type":"text/plain"
            });
            res.write("404 Not Found");
            res.end();
            return
        }
        
    })



}else{
    return true;
}

})