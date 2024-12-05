const { connections } = require('mongoose');
const connection = require('../config/database');
// const { getPrintHistory } = require('../controllers/spso.controllers');

const printHistory = [
    { studentID: "2211001", printerID: 1, datetime: "2024-12-04 09:30", fileType: "PDF", fileSize: "2.5MB", pageSize: "A4", numberOfPage: 5 },
    { studentID: "2212002", printerID: 3, datetime: "2024-12-04 10:15", fileType: "DOCX", fileSize: "1.2MB", pageSize: "A4", numberOfPage: 3 },
    { studentID: "2311009", printerID: 2, datetime: "2024-12-03 14:00", fileType: "PDF", fileSize: "3.1MB", pageSize: "A3", numberOfPage: 10 },
    { studentID: "2312010", printerID: 4, datetime: "2024-12-03 15:45", fileType: "PPT", fileSize: "5.5MB", pageSize: "A4", numberOfPage: 8 },
    { studentID: "2351013", printerID: 6, datetime: "2024-12-02 11:30", fileType: "DOCX", fileSize: "700KB", pageSize: "A5", numberOfPage: 2 },
    { studentID: "2252006", printerID: 7, datetime: "2024-12-02 13:50", fileType: "PDF", fileSize: "4.0MB", pageSize: "A4", numberOfPage: 12 },
    { studentID: "2213003", printerID: 8, datetime: "2024-12-01 16:40", fileType: "PDF", fileSize: "2.8MB", pageSize: "A4", numberOfPage: 6 },
    { studentID: "2313011", printerID: 5, datetime: "2024-12-01 09:20", fileType: "XLSX", fileSize: "3.2MB", pageSize: "A4", numberOfPage: 4 },
    { studentID: "2253007", printerID: 10, datetime: "2024-12-02 10:10", fileType: "PDF", fileSize: "1.8MB", pageSize: "A4", numberOfPage: 5 },
    { studentID: "2354016", printerID: 9, datetime: "2024-12-04 12:00", fileType: "PPT", fileSize: "6.2MB", pageSize: "A4", numberOfPage: 15 },
    { studentID: "2214004", printerID: 3, datetime: "2024-12-03 10:30", fileType: "DOCX", fileSize: "900KB", pageSize: "A5", numberOfPage: 3 },
    { studentID: "2313019", printerID: 7, datetime: "2024-12-01 14:50", fileType: "PDF", fileSize: "2.5MB", pageSize: "A3", numberOfPage: 7 },
    { studentID: "2251005", printerID: 1, datetime: "2024-12-03 08:00", fileType: "DOCX", fileSize: "1.1MB", pageSize: "A4", numberOfPage: 4 },
    { studentID: "2352014", printerID: 2, datetime: "2024-12-02 17:00", fileType: "PDF", fileSize: "3.5MB", pageSize: "A4", numberOfPage: 9 },
    { studentID: "2314012", printerID: 5, datetime: "2024-12-01 15:30", fileType: "PPT", fileSize: "5.0MB", pageSize: "A4", numberOfPage: 11 },
];
  
  
module.exports = {
    getPrintHistory : async() => {
        return printHistory;
    },
}