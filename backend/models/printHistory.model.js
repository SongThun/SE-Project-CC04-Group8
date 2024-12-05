const { connections } = require('mongoose');
const connection = require('../config/database');
// const { getPrintHistory } = require('../controllers/spso.controllers');

const printHistory = [
    { studentID: "2211001", printerID: 1, datetime: "2024-12-04 09:30", file_type: "PDF", file_size: "2.5MB", page_size: "A4", number_of_page: 5 },
    { studentID: "2212002", printerID: 3, datetime: "2024-12-04 10:15", file_type: "DOCX", file_size: "1.2MB", page_size: "A4", number_of_page: 3 },
    { studentID: "2311009", printerID: 2, datetime: "2024-12-03 14:00", file_type: "PDF", file_size: "3.1MB", page_size: "A3", number_of_page: 10 },
    { studentID: "2312010", printerID: 4, datetime: "2024-12-03 15:45", file_type: "PPT", file_size: "5.5MB", page_size: "A4", number_of_page: 8 },
    { studentID: "2351013", printerID: 6, datetime: "2024-12-02 11:30", file_type: "DOCX", file_size: "700KB", page_size: "A4", number_of_page: 2 },
    { studentID: "2252006", printerID: 7, datetime: "2024-12-02 13:50", file_type: "PDF", file_size: "4.0MB", page_size: "A4", number_of_page: 12 },
    { studentID: "2213003", printerID: 8, datetime: "2024-12-01 16:40", file_type: "PDF", file_size: "2.8MB", page_size: "A4", number_of_page: 6 },
    { studentID: "2313011", printerID: 5, datetime: "2024-12-01 09:20", file_type: "XLSX", file_size: "3.2MB", page_size: "A4", number_of_page: 4 },
    { studentID: "2253007", printerID: 10, datetime: "2024-12-02 10:10", file_type: "PDF", file_size: "1.8MB", page_size: "A4", number_of_page: 5 },
    { studentID: "2354016", printerID: 9, datetime: "2024-12-04 12:00", file_type: "PPT", file_size: "6.2MB", page_size: "A4", number_of_page: 15 },
    { studentID: "2214004", printerID: 3, datetime: "2024-12-03 10:30", file_type: "DOCX", file_size: "900KB", page_size: "A4", number_of_page: 3 },
    { studentID: "2313019", printerID: 7, datetime: "2024-12-01 14:50", file_type: "PDF", file_size: "2.5MB", page_size: "A3", number_of_page: 7 },
    { studentID: "2251005", printerID: 1, datetime: "2024-12-03 08:00", file_type: "DOCX", file_size: "1.1MB", page_size: "A4", number_of_page: 4 },
    { studentID: "2352014", printerID: 2, datetime: "2024-12-02 17:00", file_type: "PDF", file_size: "3.5MB", page_size: "A4", number_of_page: 9 },
    { studentID: "2314012", printerID: 5, datetime: "2024-12-01 15:30", file_type: "PPT", file_size: "5.0MB", page_size: "A4", number_of_page: 11 },
];
  
  
module.exports = {
    getPrintHistory : async() => {
        return printHistory;
    },
}