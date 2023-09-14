const http = require("http");
const homeHtml = require("./views/home/index.js");
const siteCss = require("./content/styles/site.js");
const addBreedHtml = require("./views/addBreed.js")
const addCatHtml = require("./views/addCat.js")
const catTemplate = require ("./views/home/catsTemplate.js")
const PORT = 5000;

const cats = [
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedCat_8727.jpg/1280px-RedCat_8727.jpg',
        name: 'Tsunami',
        breed : 'ulichna1',
        description: 'Very cute cat1!'
    },
    {
        imageUrl: 'https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-superJumbo.jpg',
        name: 'Pesho',
        breed : 'ulichna2',
        description: 'Very cute cat2!'
    },
    {
        imageUrl: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg',
        name: 'Dancho',
        breed : 'ulichna3',
        description: 'Very cute cat3!'
    },
    {
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/beautiful-smooth-haired-red-cat-lies-on-the-sofa-royalty-free-image-1678488026.jpg?crop=0.88847xw:1xh;center,top&resize=1200:*',
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
    const imageUlrPattern = /{{imageUrl}}/g;
    const namePattern = /{{name}}/g;
    const breedPattern = /{{breed}}/g;
    const descriptionPattern = /{{description}}/g
    const catHtml = cats.map( cat => catTemplate
        .replace(imageUlrPattern, cat.imageUrl)
        .replace(namePattern, cat.name)
        .replace(breedPattern, cat.breed)
        .replace(descriptionPattern, cat.description)
        )
    const homeHtmlTemplate = homeHtml.replace("{{cats}}", catHtml)
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
