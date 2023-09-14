const http = require("http");
const homeHtml = require("./views/home/index.js");
const siteCss = require("./content/styles/site.js");
const addBreedHtml = require("./views/addBreed.js")
const addCatHtml = require("./views/addCat.js")
const PORT = 5000;

const cats = [
    {
        inmageUrl: '',
        name: 'Tsunami',
        breed : 'ulichna1',
        description: 'Very cute cat1!'
    },
    {
        inmageUrl: '',
        name: 'Pesho',
        breed : 'ulichna2',
        description: 'Very cute cat2!'
    },
    {
        inmageUrl: '',
        name: 'Dancho',
        breed : 'ulichna3',
        description: 'Very cute cat3!'
    },
    {
        inmageUrl: '',
        name: 'Mariika',
        breed : 'ulichna4',
        description: 'Very cute cat4!'
    },

]

const server = http.createServer((req, res) => {
  const { url } = req;
//   console.log(url);
  // console.log(homeHtml);
  if (url === "/") {
    const homeHtmlTemplate = homeHtml.replace("{{cats}}", "<h1> cats interpolation works</h1> " )
    res.writeHead(200, {
      "Content-type": "text/html",
    });

    res.write(homeHtmlTemplate);
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
  } else if( url === '/cats/add-cat'){
    res.writeHead(200, {
        "Content-type": "text/html",
      });
    res.write(addCatHtml);
  }

 
  res.end();
});

server.listen(PORT, () => console.log(`Server is listen on port ${PORT}`));
