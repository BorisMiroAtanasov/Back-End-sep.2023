const { log } = require("console");
const http = require("http")
const port = 5000;

const server = http.createServer((req, res) => {
    const {method, url} = req
console.log("server is running");
// console.log(method);
// console.log(url);
res.writeHead(200 , {
    'content-type': "text/html"
})
res.write("<h3>Hellow from web server, Updated</h3>");
res.end()
});

server.listen(port);
console.log(`Server is listening on port: ${port}`);