const http = require('http');
const port = 5002;


const server= http.createServer((req, res) => {
   res.writeHead(200,{
    "Content-Type": "text/plain"
   });

   res.write("Hellow JS WORD");
   res.end()


})


server.listen(port, () => console.log(`server is listen on port ${port}`));