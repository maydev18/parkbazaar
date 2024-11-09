const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
    //the email of user to whom this parking belong
    userID : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    twoWheelPrice : {
        type : Number,
        required : true
    },
    fourWheelPrice : {
        type : Number,
        required : true
    },
    twoWheelCapacity : {
        type : Number,
        required : true
    },
    fourWheelCapacity : {
        type : Number,
        required : true
    },
    //first line of address
    firstLine : {
        type : String,
        required : true
    },
    //second line of address
    secondLine : {
        type : String
    },
    //title of the parking
    title : {
        type : String,
        required : true
    },
    //phone of the parking owner
    phone : {
        type : String,
        required : true
    },
    pincode : {
        type : String,
        required : true
    },
    landmark : {
        type : String,
    },
    state : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    latitude : {
        type : Number,
        required : true
    },
    longitude : {
        type : Number,
        required : true
    }
});

module.exports = mongoose.model("Parking" , parkSchema);