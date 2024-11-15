const mongoose = require("mongoose");
const geolib = require("geolib");
const Park = require("../models/park");
const Booking = require("../models/booking");
const axios = require("axios");
exports.addParking = async (req , res , next) => {
    try{
        const userID = req.body.userID;
        const title = req.body.title;
        const description = req.body.description;
        const price = req.body.price;
        const capacity = req.body.capacity;
        const fullAddress = req.body.fullAddress;
        const phone = req.body.phone;
        const pincode = req.body.pincode;
        const landmark = req.body.landmark;
        const state = req.body.state;
        const city = req.body.city;
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const parking = await Park.create({
            userID : userID,
            title : title,
            description : description,
            price : price,
            capacity : capacity,
            fullAddress : fullAddress,
            phone : phone,
            pincode : pincode,
            landmark : landmark,
            state : state,
            city : city,
            latitude : latitude,
            longitude : longitude
        })
        return res.status(200).json("parking created successfully");
    }
    catch(err){
        next(err);
    }
}

exports.createBooking = async(req , res , next) => {
    try{
        const date = req.body.date;
        const checkin = req.body.checkin;
        const checkout = req.body.checkout;
        const numberPlate = req.body.numberPlate;
        const phone = req.body.phone;
        const email = req.body.email;
        const name = req.body.name;
        const parkID = req.body.parkID;
        const booking = await Booking.create({
            date : date,
            checkIn : checkin,
            checkOut : checkout,
            numberPlate : numberPlate,
            phone : phone,
            email : email,
            name : name,
            parkID : parkID,
        });
        return res.status(200).json("Booking created successfully");
    }
    catch(err){
        next(err);
    }
}

exports.getParkingSpots = async(req , res , next) => {
    try{
        const latitude = req.body.latitude;
        const longitude = req.body.longitude;
        const api = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C${longitude}&key=55a64a5760744efbaf92cab519f4e906`;
        const data = await axios.get(api);
        const state = data.data.results[0].components.state.toLowerCase();
        const parkings = await Park.find({state : state});
        const sortedLocations = parkings.sort((a, b) => {
            const distanceA = geolib.getDistance(
                { latitude: latitude, longitude: longitude },
                { latitude: a.latitude, longitude: a.longitude }
            );
            const distanceB = geolib.getDistance(
                { latitude: latitude, longitude: longitude },
                { latitude: b.latitude, longitude: b.longitude }
            );
            return distanceA - distanceB;
        });
        return res.status(200).json(sortedLocations);
    }
    catch(err){
        next(err);
    }
}
exports.checkAvailability = async(req , res , next) => {
    try{
        const checkin = req.body.checkin;
        const checkout = req.body.checkout;
        const inputDate = new Date(req.body.date);
        const parkID = req.body.parkID;

        const startOfDay = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate()));
        const endOfDay = new Date(Date.UTC(inputDate.getUTCFullYear(), inputDate.getUTCMonth(), inputDate.getUTCDate() + 1));

        const bookings = await Booking.find({
            date: {
                $gte: startOfDay,
                $lt: endOfDay
            },
            parkID: parkID
        }).populate("parkID");
        let count = 0;
        bookings.forEach(booking => {
            if(booking.checkIn <= checkin && booking.checkOut >= checkout){
                count++;
            }
            else if(checkin < booking.checkIn && checkout > booking.checkIn){
                count++;
            }
        })
        if(bookings.length === 0){
            return res.status(200).json({
                available : true,
            })
        }
        else{
            if(bookings[0].parkID.capacity == count){
                return res.status(200).json({
                    available : false,
                })
            }
            else{
                return res.status(200).json({
                    available : true,
                })
            }
        }
    }
    catch(err){
        next(err);
    }
}


exports.getBookings = async(req , res , next) => {
    try{
        const bookings = await Booking.find({
            email : req.params.email
        })
        return res.status(200).json(bookings);
    }
    catch(err){
        next(err);
    }
}

exports.getMyParkings = async(req , res , next) => {
    try{
        const parkings = await Park.find({userID : req.params.email});
        return res.status(200).json(parkings);
    }
    catch(err){
        next(err);
    }
}