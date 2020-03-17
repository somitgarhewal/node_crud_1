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
      const data= await user.find({ '_id': req.params.id })
      console.log("id ", req.params.id);

      console.log("persons ", data);
      res.send({person: data, success: true})
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
   deleteUser : (req, res) => {
      let {id} = req.params;
      user.remove({
         _id : id
      }, 
      (err) => {
         if(err) 
            res.send(err);
         else
            res.send({message: "user successfully deleted", success: true});
      }
      )       
   },
   updateUser : (req, res) => { 
      let {id} = req.params;
       var data = req.body;
       console.log(data);
       user.findByIdAndUpdate(id, data, (err, user) => {
       if (err) throw err;
       res.send({message: 'Successfully! User updated - ' + data.name, success: true});
       })
   }
}

module.exports = userController;
