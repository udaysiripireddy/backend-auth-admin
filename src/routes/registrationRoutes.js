const express = require('express');
const router = express.Router();
const Registration = require('../models/registration');

// Handle registration
router.post('/register', async (req, res) => {
  try {
    const { fullName, mobileNumber, username, emailId, password } = req.body;

    // Create a new registration instance
    const newRegistration = new Registration({
      fullName,
      mobileNumber,
      username,
      emailId,
      password
    });

    // Save the registration to the database
    await newRegistration.save();

    res.status(201).send({ message: 'Registration successful!' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
