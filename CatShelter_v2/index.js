const http = require("http");
const homeTemplate = require("./views/home/index");
const styleCss = require("./content/styles/site");
const addCat = require ("./views/addCat")
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
  }
  

  res.end();
});

server.listen(port, () => console.log(`server is listen on port ${port}`));
