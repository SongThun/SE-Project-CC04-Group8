const express = require('express');
const router = express.Router();

// Test

const {
    getAllUser,
} = require('../controllers/user.controllers');
const { verify } = require('jsonwebtoken');

router.post('/getUser', getAllUser);
router.get('/getUser', getAllUser);

module.exports = router;    