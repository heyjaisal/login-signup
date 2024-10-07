const express = require('express');
const { register, login } = require('../Controllers/authController');

const router = express.Router();

// Register
router.post('/register', register);

// Login
router.post('/login', login);

module.exports = router;
