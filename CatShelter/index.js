const http = require("http");
const homeTemplate = require('./views/home/index');
//const { log } = require("console");
const PORT = 5000



const server = http.createServer((req, res) =>{
    const {url} = req;
    console.log(url);
    if(url === '/'){
        console.log(homeTemplate);
    }

    res.write('Hellow Update');
    res.end();

});

server.listen(PORT, ()=> console.log(`Server is listen on port ${PORT}`));
