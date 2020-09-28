const express = require("express");
const app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public/css'))

var port = 8000;

app.listen(port);


console.log("server on "+port);