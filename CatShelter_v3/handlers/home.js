const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require("../data/cats.json");


module.exports =(req, res) => {
    const pathName = url.parse(req.url).pathname;


//    console.log(pathNames);

if(pathName === "/" && req.method ==="GET"){

    let filePath = path.normalize(
        path.join(__dirname,"../views/home/index.html")
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
        let modifiedCats = cats.map(cat => `<li>
        <img src=${cat.imageUrl}>
        <h3>${cat.name}</h3>
        <p><span>Breed: </span>${cat.breed}</p>
        <p><span>Description: </span>${cat.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="/cats/${cat.id}/edit">Change Info</a></li>
            <li class="btn delete"><a href="/cats/${cat.id}/new-home">New Home</a></li>
        </ul>
    </li>`);

    let modifData = data.toString().replace(`{{cats}}`, modifiedCats.join(''))

       res.writeHead(200, {
        "Content-type": "text/html"
       });

       res.write(modifData);
       res.end()



    })



}else{
    return true;
}

}