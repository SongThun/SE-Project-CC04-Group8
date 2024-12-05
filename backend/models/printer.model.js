const { connections } = require('mongoose');
const connection = require('../config/database');

const printers =  [
    { printerId: 1, brand: "HP", location: "B1-101", last_updated: "2024-12-04 10:30", status: "Hoạt động" },
    { printerId: 2, brand: "Canon", location: "C4-202", last_updated: "2024-12-04 09:15", status: "Vô hiệu hóa" },
    { printerId: 3, brand: "Epson", location: "A1-303", last_updated: "2024-12-03 17:45", status: "Hoạt động" },
    { printerId: 4, brand: "Brother", location: "B2-404", last_updated: "2024-12-02 15:20", status: "Hoạt động" },
    { printerId: 5, brand: "Samsung", location: "C5-505", last_updated: "2024-12-01 14:10", status: "Vô hiệu hóa" },
    { printerId: 6, brand: "Lexmark", location: "A2-203", last_updated: "2024-12-04 11:50", status: "Hoạt động" },
    { printerId: 7, brand: "Xerox", location: "B3-302", last_updated: "2024-12-03 10:05", status: "Hoạt động" },
    { printerId: 8, brand: "Dell", location: "C4-408", last_updated: "2024-12-01 16:30", status: "Vô hiệu hóa" },
    { printerId: 9, brand: "Ricoh", location: "A3-105", last_updated: "2024-12-02 12:00", status: "Hoạt động" },
    { printerId: 10, brand: "Kyocera", location: "B4-510", last_updated: "2024-12-04 08:45", status: "Hoạt động" },
];
module.exports = {
    getPrinters : async() => {
        // try{
        //     const [rows] = await connection.query(`
        //         SELECT * FROM \`user\` LIMIT 10
        //     `)
        //     return rows
        // }catch(error){
        //     console.log(error);
        //     throw error;
        // }
        return printers;
    },
}