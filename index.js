const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        'content-type':'text/html'
    })
    const file = fs.readFileSync('./index.html');
    res.end(file);
})

server.listen(3000,()=>{
    console.log("Serving on port :3000");
})