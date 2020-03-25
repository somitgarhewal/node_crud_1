var mongoose = require('mongoose');
var userSchema = require('../models/userModel');
const user = require('../models/userModel')
// const user = mongoose.model('user');

const userController = {

   getUser : async (req, res) => {
      const userData= await user.find({})
      console.log("person ", userData);
      res.send({person: userData, success: true})
   },
   fetchUser : async (req, res) => {
      try{
      const data= await user.find({ '_id': req.params.id })
      console.log("id ", req.params.id);

      console.log("persons ", data);
      res.send({person: data, success: true})
      }
      catch(error){
         console.error("ERROR MESSAGE SEE" ,error);
         res.send("Error occured")
      }
   },
   addUser : (req, res) => {
      var userSchema = user(req.body);
        userSchema.save((err, users) => {
          if(err) {
            console.log("err", err)
          }
          else {
            console.log("success")
            res.send({ data: userSchema, success: true })
          }
        });
   },
   deleteUser : async(req, res) => {
      try{
         await user.remove({ _id : req.params.id })
         res.send({message: "user successfully deleted ", success: true})
      }      
      catch(error){
         res.send({message: "ERROR OCCURED ",success:false});
      } 
   },
   updateUser : (req, res) => { 
      let {id} = req.params;
      var data = req.body;
      console.log(data);
      user.findByIdAndUpdate(id, data, (err, user) => {
		if (err) res.send({ message:"error occured " + err, success: false})
		else
      res.send({message: 'Successfully! User updated - ' + data.name, success: true});
      })
   }
}

module.exports = userController;
