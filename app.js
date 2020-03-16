const express = require("express");

const app = express();

app.use(express.static("public"));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb', { extended: true });


app.get("/home", (req, res) => {
console.log("Hello");
res.send("Server Started");
});

app.listen(3000);