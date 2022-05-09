const mongoose = require('mongoose');
const roomsSchema = new mongoose.Schema({

   RoomType: {
       type: String,
       required: true,
       trim: true
   },

   Sleep: {
    type: Number,
    required:true
   },

   TodayPrice: {
       type: String,
       required: true

   },
   Facilities: {
    type: String,
    required: true

},
Other:{
    type:String
},

Availability:{
    type:String,
    
}

}, { timestamps: true});


module.exports = mongoose.model('Rooms', roomsSchema);

