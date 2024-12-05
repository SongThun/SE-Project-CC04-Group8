const express = require('express');
const router = express.Router();

const {
    getAllPrinters, getAllStudents, getAllPrintHistory
} = require('../controllers/spso.controllers');
const { verify } = require('jsonwebtoken');

router.get('/getPrinters', getAllPrinters);
router.get('/getStudents', getAllStudents);
router.get('/getPrintHistory', getAllPrintHistory);

module.exports = router;    