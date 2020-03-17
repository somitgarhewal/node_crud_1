var mongoose = require('mongoose');
var userSchema = require('../models/userModel');

const user = mongoose.model('user');

const userController = {

   getUser : async (req, res) => {
      const userData= await user.find({})
      console.log("person ", userData);
      res.send({person: userData})
   },
   fetchUser : async (req, res) => {
      const data= await user.find({ '_id': req.params.id })
      console.log("id ", req.params.id);

      console.log("persons ", data);
      res.send({person: data})
   }
}

module.exports = userController;
