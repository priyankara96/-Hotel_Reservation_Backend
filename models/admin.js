const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({

   Name: {
       type: String,
       required: true,
       trim: true
   },

   Email: {
    type: String,
    required:true
   },

   PhoneNo: {
       type: String,
       required: true

   }
   

}, { timestamps: true});


module.exports = mongoose.model('Admin', adminSchema);

