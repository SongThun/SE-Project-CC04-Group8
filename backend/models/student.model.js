const { connections } = require('mongoose');
const connection = require('../config/database');

const students = [
    { studentID: "2211001", student_name: "Nguyễn Văn An", page_balance: 50 },
    { studentID: "2212002", student_name: "Trần Thị Bích", page_balance: 45 },
    { studentID: "2213003", student_name: "Phạm Minh Châu", page_balance: 60 },
    { studentID: "2214004", student_name: "Lê Hoàng Dũng", page_balance: 30 },
    { studentID: "2251005", student_name: "Ngô Quang Huy", page_balance: 40 },
    { studentID: "2252006", student_name: "Đỗ Thu Trang", page_balance: 55 },
    { studentID: "2253007", student_name: "Vũ Hữu Thành", page_balance: 20 },
    { studentID: "2254008", student_name: "Bùi Thanh Vân", page_balance: 35 },
    { studentID: "2311009", student_name: "Nguyễn Thùy Linh", page_balance: 70 },
    { studentID: "2312010", student_name: "Lý Văn Bảo", page_balance: 25 },
    { studentID: "2313011", student_name: "Hồ Phương Lan", page_balance: 50 },
    { studentID: "2314012", student_name: "Trương Quốc Anh", page_balance: 45 },
    { studentID: "2351013", student_name: "Cao Minh Hiếu", page_balance: 30 },
    { studentID: "2352014", student_name: "Phan Thị Hà", page_balance: 60 },
    { studentID: "2353015", student_name: "Lâm Quang Nhật", page_balance: 40 },
    { studentID: "2354016", student_name: "Đặng Gia Huy", page_balance: 50 },
    { studentID: "2211017", student_name: "Nguyễn Minh Tâm", page_balance: 55 },
    { studentID: "2252018", student_name: "Trần Thu Hà", page_balance: 35 },
    { studentID: "2313019", student_name: "Phạm Văn Tùng", page_balance: 25 },
    { studentID: "2354020", student_name: "Lê Thị Mai", page_balance: 45 },
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