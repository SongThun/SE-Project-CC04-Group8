const { connections } = require('mongoose');
const connection = require('../config/database');

const students = [
    { studentID: "2211001", studentName: "Nguyễn Văn An", page_balance: 50 },
    { studentID: "2212002", studentName: "Trần Thị Bích", page_balance: 45 },
    { studentID: "2213003", studentName: "Phạm Minh Châu", page_balance: 60 },
    { studentID: "2214004", studentName: "Lê Hoàng Dũng", page_balance: 30 },
    { studentID: "2251005", studentName: "Ngô Quang Huy", page_balance: 40 },
    { studentID: "2252006", studentName: "Đỗ Thu Trang", page_balance: 55 },
    { studentID: "2253007", studentName: "Vũ Hữu Thành", page_balance: 20 },
    { studentID: "2254008", studentName: "Bùi Thanh Vân", page_balance: 35 },
    { studentID: "2311009", studentName: "Nguyễn Thùy Linh", page_balance: 70 },
    { studentID: "2312010", studentName: "Lý Văn Bảo", page_balance: 25 },
    { studentID: "2313011", studentName: "Hồ Phương Lan", page_balance: 50 },
    { studentID: "2314012", studentName: "Trương Quốc Anh", page_balance: 45 },
    { studentID: "2351013", studentName: "Cao Minh Hiếu", page_balance: 30 },
    { studentID: "2352014", studentName: "Phan Thị Hà", page_balance: 60 },
    { studentID: "2353015", studentName: "Lâm Quang Nhật", page_balance: 40 },
    { studentID: "2354016", studentName: "Đặng Gia Huy", page_balance: 50 },
    { studentID: "2211017", studentName: "Nguyễn Minh Tâm", page_balance: 55 },
    { studentID: "2252018", studentName: "Trần Thu Hà", page_balance: 35 },
    { studentID: "2313019", studentName: "Phạm Văn Tùng", page_balance: 25 },
    { studentID: "2354020", studentName: "Lê Thị Mai", page_balance: 45 },
];

module.exports = {
    getStudents : async() => {
        // try{
        //     const [rows] = await connection.query(`
        //         SELECT * FROM \`user\` LIMIT 10
        //     `)
        //     return rows
        // }catch(error){
        //     console.log(error);
        //     throw error;
        // }
        return students;
    },
}