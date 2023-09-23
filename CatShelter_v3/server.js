const http = require('http');
const port = 5002;
const handlers = require("./handlers")


const server= http.createServer((req, res) => {

    for (const handler of handlers) {
        if(!handler(req,res)){
            break;
        }
        
    }




//    res.writeHead(200,{
//     "Content-Type": "text/plain"
//    });

//    res.write("Hellow JS WORD");
//    res.end()


})


server.listen(port, () => console.log(`server is listen on port ${port}`));