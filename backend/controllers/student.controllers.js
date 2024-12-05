const dayjs = require('dayjs');

const { 
    getPrinters
} = require('../models/printer.model');
const {
    getPrintHistory
} = require('../models/printHistory.model');

const jwt = require('jsonwebtoken');
const connection = require('../config/database');


const getAllPrinters = async (req, res) => {
    try {
        const printer = await getPrinters();
        res.json(printer);
    } catch (error) {
        console.error('Error in getPrinter:', error);
        res.status(500).json({ message: error.message });
    }
};

const getAllPrintHistory = async (req, res) => {
    try {
        const printHistory = await getPrintHistory();
        res.json(printHistory);
    } catch (error) {
        console.error('Error in getPrintHistory:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPrinters,
    getAllPrintHistory
};