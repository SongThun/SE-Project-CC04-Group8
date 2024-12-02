const { connections } = require('mongoose');
const connection = require('../config/database');
module.exports = {
    getUser : async() => {
        try{
            const [rows] = await connection.query(`
                SELECT * FROM \`user\` LIMIT 10
            `)
            return rows
        }catch(error){
            console.log(error);
            throw error;
        }
    },
}