const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings - create booking
router.post('/', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json({ message: 'Booking saved', booking: savedBooking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

module.exports = router;
