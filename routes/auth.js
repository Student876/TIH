const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Show signup page
router.get('/signup', (req, res) => {
  res.render('signup', { title: 'Signup' });
});

// Handle signup with bcrypt
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, languagePreference } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send('User already exists. Please login.');
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      languagePreference,
    });

    await newUser.save();
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error signing up.');
  }
});

// Show login page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Handle login with bcrypt
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.send('No user found with this email.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send('Incorrect password.');
    }

    res.send(`Welcome, ${user.name}!`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error logging in.');
  }
});

module.exports = router;
