const express = require("express");
const bodyParser = require('body-parser');
const router = require('./routers/userRouters')

const app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb1', { extended: true });

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())
router(app);

app.listen(3000);