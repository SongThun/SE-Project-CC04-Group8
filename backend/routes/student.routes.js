const express = require('express');
const router = express.Router();

const {
    getAllPrinters, getAllPrintHistory
} = require('../controllers/student.controllers');
const { verify } = require('jsonwebtoken');

router.get('/getPrinters', getAllPrinters);
router.get('/getPrintHistory', getAllPrintHistory);

module.exports = router;    