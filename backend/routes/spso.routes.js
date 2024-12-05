const express = require('express');
const router = express.Router();

const {
    getAllPrinters, getAllStudents, getAllPrintHistory,signInStudent
} = require('../controllers/spso.controllers');
const { verify } = require('jsonwebtoken');

router.post('/signIn', signInStudent);
router.get('/getPrinters', getAllPrinters);
router.get('/getStudents', getAllStudents);
router.get('/getPrintHistory', getAllPrintHistory);

module.exports = router;    