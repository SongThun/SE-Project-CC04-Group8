const { connections } = require('mongoose');
const connection = require('../config/database');
const jwt = require('jsonwebtoken');

const users = [
    { studentID: "2211001", student_name: "Nguyễn Văn An", page_balance: 50,account_balance:200000, email: "an.nguyen12345@hcmut.edu.vn", password: "123456", username: "an.nguyen12345", user_type: "student" },
    { studentID: "2212002", student_name: "Trần Thị Bích", page_balance: 45,account_balance:200000, email: "bich.tran12345@hcmut.edu.vn", password: "password123", username: "bich.tran12345", user_type: "student" },
    { studentID: "2213003", student_name: "Phạm Minh Châu", page_balance: 60,account_balance:200000, email: "chau.pham12345@hcmut.edu.vn", password: "password123", username: "chau.pham12345", user_type: "student" },
    { studentID: "2314012", student_name: "Trương Quốc Anh", page_balance: 45,account_balance:200000, email: "anh.truong12345@hcmut.edu.vn", password: "password123", username: "anh.truong12345", user_type: "student" },
    { studentID: "2351013", student_name: "Cao Minh Hiếu", page_balance: 30,account_balance:200000, email: "hieu.cao12345@hcmut.edu.vn", password: "password123", username: "hieu.cao12345", user_type: "student" },
    { studentID: "2352014", student_name: "Phan Thị Hà", page_balance: 60,account_balance:200000, email: "ha.phan12345@hcmut.edu.vn", password: "password123", username: "ha.phan12345", user_type: "student" },
    { studentID: "2353015", student_name: "Lâm Quang Nhật", page_balance: 40,account_balance:200000, email: "nhat.lam12345@hcmut.edu.vn", password: "password123", username: "nhat.lam12345", user_type: "student" },
    { studentID: "2354016", student_name: "Đặng Gia Huy", page_balance: 50,account_balance:200000, email: "huy.dang12345@hcmut.edu.vn", password: "password123", username: "huy.dang12345", user_type: "student" },
    { studentID: "2211017", student_name: "Nguyễn Minh Tâm", page_balance: 55,account_balance:200000, email: "tam.nguyen12345@hcmut.edu.vn", password: "password123", username: "tam.nguyen12345", user_type: "student" },
    { studentID: "2252018", student_name: "Trần Thu Hà", page_balance: 35,account_balance:200000, email: "ha.tran12345@hcmut.edu.vn", password: "password123", username: "ha.tran12345", user_type: "student" },
    { studentID: "2313019", student_name: "Phạm Văn Tùng", page_balance: 25,account_balance:200000, email: "tung.pham12345@hcmut.edu.vn", password: "password123", username: "tung.pham12345", user_type: "student" },
    { studentID: "2354020", student_name: "Lê Thị Mai", page_balance: 45,account_balance:200000, email: "mai.le12345@hcmut.edu.vn", password: "password123", username: "mai.le12345", user_type: "student" },
    { spsoID: "SPSO1001", student_name: "Lê Hoàng Dũng", page_balance: 30,account_balance:200000, email: "dung.le12345@hcmut.edu.vn", password: "password123", username: "dung.le12345", user_type: "spso" },
    { spsoID: "SPSO1002", student_name: "Ngô Quang Huy", page_balance: 40,account_balance:200000, email: "huy.ngo12345@hcmut.edu.vn", password: "password123", username: "huy.ngo12345", user_type: "spso" },
    { spsoID: "SPSO1003", student_name: "Đỗ Thu Trang", page_balance: 55,account_balance:200000, email: "thu.trang12345@hcmut.edu.vn", password: "password123", username: "thu.trang12345", user_type: "spso" },
    { spsoID: "SPSO1004", student_name: "Vũ Hữu Thành", page_balance: 20,account_balance:200000, email: "thanh.vu12345@hcmut.edu.vn", password: "password123", username: "thanh.vu12345", user_type: "spso" },
    { spsoID: "SPSO1005", student_name: "Bùi Thanh Vân", page_balance: 35,account_balance:200000, email: "van.bui12345@hcmut.edu.vn", password: "password123", username: "van.bui12345", user_type: "spso" },
    { spsoID: "SPSO1006", student_name: "Nguyễn Thùy Linh", page_balance: 70,account_balance:200000, email: "linh.nguyen12345@hcmut.edu.vn", password: "password123", username: "linh.nguyen12345", user_type: "spso" },
    { spsoID: "SPSO1007", student_name: "Lý Văn Bảo", page_balance: 25,account_balance:200000, email: "bao.ly12345@hcmut.edu.vn", password: "password123", username: "bao.ly12345", user_type: "spso" },
    { spsoID: "SPSO1008", student_name: "Hồ Phương Lan", page_balance: 50,account_balance:200000, email: "lan.ho12345@hcmut.edu.vn", password: "password123", username: "lan.ho12345", user_type: "spso" }

];

const validUser =  async (username, password) => {
    try {
        if (!username || !password) {
            return null; // Return null if either username or password is missing
        }

        // Use find to search for the student in the list
        const user = users.find((user) => user.username === username && user.password === password);

        // If no matching student is found, return null
        if (!user) {
            return null;
        }

        // If a valid student is found, return the student
        return user;

    } catch (error) {
        console.error('Error in validUser:', error);
        throw error; // Rethrow error after logging it
    }
};
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
    

    signIn : async (username, password) => {
    try {
        if (!username || !password) {
            return {
                success: false,
                message: 'Username and password are required'
            };
        }

        const user = await validUser(username, password);
        if (!user) {
            return {
                success: false,
                message: 'Invalid credentials'
            };
        }

        const token = jwt.sign(
            {
                username: user.username,
                user_type: user.user_type
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '24h'
            }
        );

        return {
            success: true,
            token,
            user: {
                username: user.username,
                name: user.student_name,
                email: user.email,
                id: user?.user_type === 'spso' ? user.spsoID : user.studentID,
                page_balance: user.page_balance,
                account_balance: user.account_balance,
                user_type: user.user_type
            }
        }
    } catch (error) {
        console.error('SignIn Error:', error);
        return {
            success: false,
            message: 'An error occurred during sign in',
            error: error.message
        };
    }
},
}