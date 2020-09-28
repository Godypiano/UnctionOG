const express = require("express");
const app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public/css'))


  
  server.listen(process.env.PORT || 80, () => {
    console.log("Listening on port 80");
  });


app.listen(process.env.PORT || 3000);

console.log("server on "+port);