const express = require("express");
const app = express();

app.get("/", function(req, res) {
    return res.send("Hello World From Komodo Environment");
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});