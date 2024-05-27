const http=require("http");
const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.end("<h3>hello </h3>");
})


const server=http.createServer(app);
server.listen(3005,()=>{
    console.log('Run on Server port : 3005')
})
