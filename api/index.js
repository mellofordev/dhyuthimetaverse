const express =require('express');
const path=require('path');
const server = express();
server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))
})
server.get('/immersive',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/immersive.html'))
})
server.get('/controls',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/controls.html'))
})
server.use('/',
    express.static(path.join(__dirname,'public'))
)
server.use('/immersive',
    express.static(path.join(__dirname,'public'))
)
server.listen(3000);