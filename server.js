const express = require("express");
const app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public/css'))

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

console.log("server on "+port);