const express = require('express');
const router = express.Router();

const {
    getAllUser,
} = require('../controllers/user.controllers');
const { verify } = require('jsonwebtoken');

router.get('/getUser', getAllUser);

module.exports = router;    