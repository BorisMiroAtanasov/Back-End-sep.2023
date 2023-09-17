const http = require("http");
const homeTemplate = require("./views/home/index.js");
const styleCss = require("./content/styles/site");
const addCat = require ("./views/addCat.js")
const addBreed = require("./views/addBreed.js");
const editPage = require("./views/editCat.js")
const errorPage = require("./erorr.js");
const cats = require("./cats.json")
const port = 5001;

const server = http.createServer((req, res) => {
  //     res.writeHead(200 , {
  //         'content-type': "text/html"
  //     })
  // res.write("<h1> Hellow server</h1>")

  const { url } = req;
 

  if (url === "/") {
    res.writeHead(200, {
        "content-type": "text/html",
      });
    
    res.write(homeTemplate)
  } else if(url === "/content/styles/site.css"){
    res.writeHead(200, {
        "content-type": "text/css",
      });
      res.write(styleCss)
  } else if(url === "/cats/add-cat"){
    res.writeHead(200, {
        "content-type": "text/html",
      });
      res.write(addCat)
  }else if ( url === '/cats/add-breed'){
    res.writeHead(200, {
        "Content-type": "text/html",
      });
    res.write(addBreed);

  }else if(/cats\/\d+\/edit/.test(req.url)){
    let catID = req.url.split('/')[2];
    let cat = cats.find((x) = x.id == catID);
    res.write(editPage(cat))

  }
  
  
  else{
    res.write(errorPage)
  }
  

  res.end();
});

server.listen(port, () => console.log(`server is listen on port ${port}`));
