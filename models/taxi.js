const mongoose = require('mongoose');
const taxiSchema = new mongoose.Schema({

   location: {
       type: String,
       required: true,
       trim: true
   },

   destination: {
    type: String,
    required:true
   },

   vehicle: {
       type: String,
       required: true

   },
   passengers: {
    type: String,
    required: true

},
});


module.exports = mongoose.model('Taxi', taxiSchema);

