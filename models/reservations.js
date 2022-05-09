const mongoose = require('mongoose');

const reserveSchema = new mongoose.Schema({
    roomType:{
        type:String,
        required:true
    },
    checkIn:{
        type:String,
        required:true
    },
    checkOut:{
        type:String,
        required:true
    },
    noOfRooms:{
        type: Number,
        required: true
    },
    noOfKids:{
        type: Number,
        required: true
    },
    noOfAdults:{
        type: Number,
        required: true
    },
    userID:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reservations', reserveSchema);
