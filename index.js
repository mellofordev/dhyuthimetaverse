const express =require('express');
const path=require('path');
const server = express.Router();
server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
server.use('/',
    express.static(path.join(__dirname,'public'))
)
server.listen(3000);