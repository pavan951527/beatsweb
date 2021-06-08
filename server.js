const express = require('express');

const app = express();

app.use(express.static("frontend"));

app.get("/" ,function(req , res){
    res.sendFile(__dirname+"/frontend/app.html");
})
var port  = process.env.PORT || 3000;

app.listen(port , ()=>{
    console.log("server started at  port "+port);
});
