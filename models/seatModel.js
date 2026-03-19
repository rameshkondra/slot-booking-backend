const mongoose = require('mongoose');


const seatSchema = new mongoose.Schema({

    id:{
        type:String,
        required:true,
        unique:true,
    },
    booked:{
        type:Boolean,
        default:false,
    }

})

module.exports = mongoose.model('Seat',seatSchema);