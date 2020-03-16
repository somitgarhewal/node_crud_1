const express = require("express");
const bodyParser = require('body-parser');

const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb1', { extended: true });

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


app.listen(3000);