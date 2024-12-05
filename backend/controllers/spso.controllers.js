const dayjs = require('dayjs');

const { 
    getPrinters
} = require('../models/printer.model');
const { 
    getStudents,signIn
} = require('../models/student.model');
const {
    getPrintHistory
} = require('../models/printHistory.model');

const jwt = require('jsonwebtoken');
const connection = require('../config/database');
const signInStudent = async (req, res) => {
    const { username, password } = req.body;
    try {
        const respone = await signIn(username, password);
        return res.status(200).json(respone);
    } catch (error) {
        console.error('Error in signIn:', error);
        res.status(500).json({ message: error.message });
    }
}

const getAllPrinters = async (req, res) => {
    try {
        const printer = await getPrinters();
        res.json(printer);
    } catch (error) {
        console.error('Error in getPrinter:', error);
        res.status(500).json({ message: error.message });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const student = await getStudents();
        res.json(student);
    } catch (error) {
        console.error('Error in getStudents:', error);
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
    getAllStudents,
    getAllPrintHistory,
    signInStudent

};