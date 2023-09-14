const http = require("http");
const PORT = 5000



const server = http.createServer((req, res) =>{

    res.write('Hellow Update');
    res.end();

});

server.listen(PORT, ()=> console.log(`Server is listen on port ${PORT}`));
