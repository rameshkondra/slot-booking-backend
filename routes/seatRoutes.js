const express = require('express');

const router = express.Router();

const {getSeats,bookSeats,getBookings} = require('../controllers/seatController');

router.get('/seats',getSeats);
router.post("/book-seats", bookSeats);
router.get("/bookings", getBookings);

module.exports = router;