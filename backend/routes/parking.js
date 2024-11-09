const express = require('express');

const router = express.Router();
const parkController = require("../controllers/parkController");
const {body , query} = require("express-validator");

router.post("/add-parking" , [body("state").trim().toLowerCase()] , parkController.addParking);
router.post("/add-booking" , parkController.createBooking);
router.get("/get-parkings" , [body("state").trim().toLowerCase()] , parkController.getParkingSpots);
router.get("/check-availability" , parkController.checkAvailability);
module.exports = router;