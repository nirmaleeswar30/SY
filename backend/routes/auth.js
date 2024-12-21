const express = require('express');
const router = express.Router();

// Mock endpoints for now
router.post('/login', (req, res) => res.send('Login endpoint'));
router.post('/register', (req, res) => res.send('Register endpoint'));

module.exports = router;

