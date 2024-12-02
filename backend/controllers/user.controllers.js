const dayjs = require('dayjs');

const { getUser
} = require('../models/user.model');
const jwt = require('jsonwebtoken');
const connection = require('../config/database');


const getAllUser = async (req, res) => {
    try {
        const user = await getUser();
        res.json(user);
    } catch (error) {
        console.error('Error in getUser:', error);
        res.status(500).json({ message: error.message });
    }
};
module.exports = {
    getAllUser
};