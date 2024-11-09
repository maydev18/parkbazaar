const express = require('express');

const router = express.Router();
const parkController = require("../controllers/parkController");
const {body , query} = require("express-validator");

router.post("/add-parking" , parkController.addParking);
router.post("/add-booking" , parkController.createBooking);


module.exports = router;