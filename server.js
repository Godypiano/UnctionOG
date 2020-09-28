const express = require("express");
const app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public/css'))


  

app.listen(process.env.PORT || 3000);

console.log("server on "+port);