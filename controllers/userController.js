var mongoose = require('mongoose');
var userSchema = require('../models/userModel');

const user = mongoose.model('user');

const userController = {

   getUser : async (req, res) => {
      const data= await user.find({})
      console.log("person ", data);
      res.send({person: data})
   }
  
}

module.exports = userController;
