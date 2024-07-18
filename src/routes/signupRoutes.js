const express = require('express');
const router = express.Router();
const Signup = require('../models/signup');
router.post('/signup', async (req, res) => {
  try {
    const { emailId, password } = req.body;

    // Create a new signup instance
    const newSignup = new Signup({
      emailId,
      password
    });

    // Save the signup to the database
    await newSignup.save();

    res.status(201).send({ message: 'Signup successful!' });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
