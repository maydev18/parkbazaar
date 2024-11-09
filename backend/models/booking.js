const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookingSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    checkIn: {
        type: String,
        required: true
    },
    checkOut: {
        type: String,
        required: true
    },
    numberPlate : {
        type : String,
        required : true
    },
    phone : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        required : true
    },
    parkID : {
        type : Schema.Types.ObjectId,
        ref : 'Parking'
    },
    email : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model('Booking', bookingSchema);
