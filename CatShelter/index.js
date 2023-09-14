const http = require("http");
const homeHtml = require("./views/home/index.js");
const siteCss = require("./content/styles/site.js");
const addBreedHtml = require("./views/addBreed.js")
const PORT = 5000;

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  // console.log(homeHtml);
  if (url === "/") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    res.write(homeHtml);
  } else if (url === "/content/styles/site.css") {
    res.writeHead(200, {
      "Content-type": "text/css",
    });
    res.write(siteCss);
  } else if ( url === '/cats/add-breed'){
    res.writeHead(200, {
        "Content-type": "text/html",
      });
    res.write(addBreedHtml);
  }

  res.write("Hellow Update");
  res.end();
});

server.listen(PORT, () => console.log(`Server is listen on port ${PORT}`));
