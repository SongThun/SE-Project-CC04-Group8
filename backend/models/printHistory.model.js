const { connections } = require('mongoose');
const connection = require('../config/database');
// const { getPrintHistory } = require('../controllers/spso.controllers');

const printHistory = [
    { id: 1, studentID: "2211001", printerID: 1, printerName: "QuickBooks PDF Converter 3.0", datetime: "2024-05-12 09:30", file_type: "PDF", file_size: "2.5MB", page_size: "A4", number_of_page: 5, file_name: "invoice.pdf" },
    { id: 2, studentID: "2212002", printerID: 2, printerName: "OM2PDF", datetime: "2024-07-19 10:15", file_type: "DOCX", file_size: "1.2MB", page_size: "A4", number_of_page: 3, file_name: "document.docx" },
    { id: 3, studentID: "2311009", printerID: 3, printerName: "Microsoft XPS Document Writer", datetime: "2024-03-22 14:00", file_type: "PDF", file_size: "3.1MB", page_size: "A3", number_of_page: 10, file_name: "report.pdf" },
    { id: 4, studentID: "2312010", printerID: 4, printerName: "Microsoft XPS Document Writer 2", datetime: "2024-06-03 15:45", file_type: "PPT", file_size: "5.5MB", page_size: "A4", number_of_page: 8, file_name: "presentation.ppt" },
    { id: 5, studentID: "2351013", printerID: 1, printerName: "QuickBooks PDF Converter 3.0", datetime: "2024-11-25 11:30", file_type: "DOCX", file_size: "700KB", page_size: "A4", number_of_page: 2, file_name: "resume.docx" },
    { id: 6, studentID: "2252006", printerID: 2, printerName: "OM2PDF", datetime: "2024-09-14 13:50", file_type: "PDF", file_size: "4.0MB", page_size: "A4", number_of_page: 12, file_name: "pdf_document.pdf" },
    { id: 7, studentID: "2213003", printerID: 3, printerName: "Microsoft XPS Document Writer", datetime: "2024-08-30 16:40", file_type: "PDF", file_size: "2.8MB", page_size: "A4", number_of_page: 6, file_name: "file.pdf" },
    { id: 8, studentID: "2313011", printerID: 4, printerName: "Microsoft XPS Document Writer 2", datetime: "2024-10-17 09:20", file_type: "XLSX", file_size: "3.2MB", page_size: "A4", number_of_page: 4, file_name: "spreadsheet.xlsx" },
    { id: 9, studentID: "2253007", printerID: 1, printerName: "QuickBooks PDF Converter 3.0", datetime: "2024-12-09 10:10", file_type: "PDF", file_size: "1.8MB", page_size: "A4", number_of_page: 5, file_name: "invoice2.pdf" },
    { id: 10, studentID: "2354016", printerID: 2, printerName: "OM2PDF", datetime: "2024-07-25 12:00", file_type: "PPT", file_size: "6.2MB", page_size: "A4", number_of_page: 15, file_name: "meeting.ppt" },
    { id: 11, studentID: "2214004", printerID: 3, printerName: "Microsoft XPS Document Writer", datetime: "2024-04-20 10:30", file_type: "DOCX", file_size: "900KB", page_size: "A4", number_of_page: 3, file_name: "report.docx" },
    { id: 12, studentID: "2313019", printerID: 4, printerName: "Microsoft XPS Document Writer 2", datetime: "2024-02-11 14:50", file_type: "PDF", file_size: "2.5MB", page_size: "A3", number_of_page: 7, file_name: "design.pdf" },
    { id: 13, studentID: "2251005", printerID: 1, printerName: "QuickBooks PDF Converter 3.0", datetime: "2024-10-05 08:00", file_type: "DOCX", file_size: "1.1MB", page_size: "A4", number_of_page: 4, file_name: "letter.docx" },
    { id: 14, studentID: "2352014", printerID: 2, printerName: "OM2PDF", datetime: "2024-08-18 17:00", file_type: "PDF", file_size: "3.5MB", page_size: "A4", number_of_page: 9, file_name: "manual.pdf" },
    { id: 15, studentID: "2314012", printerID: 3, printerName: "Microsoft XPS Document Writer", datetime: "2024-01-28 15:30", file_type: "PPT", file_size: "5.0MB", page_size: "A4", number_of_page: 11, file_name: "conference.ppt" }
];



  
  
module.exports = {
    getPrintHistory : async() => {
        return printHistory;
    },
}