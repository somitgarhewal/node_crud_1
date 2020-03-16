var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: {type : String},
    age: {type : String},
    gender: {type : String}
});

mongoose.model('user', userSchema)
