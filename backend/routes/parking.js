const express = require('express');

const router = express.Router();
const parkController = require("../controllers/parkController");
const {body , query} = require("express-validator");

router.post("/add-parking" , [body("state").trim().toLowerCase()] , parkController.addParking);
router.post("/add-booking" , parkController.createBooking);
router.post("/get-parkings"  , parkController.getParkingSpots);
router.get("/get-bookings/:email"  , parkController.getBookings);
router.get("/check-availability" , parkController.checkAvailability);
router.get("/get-my-parkings/:email" , parkController.getMyParkings);
module.exports = router;