require('dotenv').config();
const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.routes');
const spsoRoutes = require('./routes/spso.routes');
const studentRoutes = require('./routes/student.routes');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/api/users', userRoutes);
app.use('/api/spso', spsoRoutes);
app.use('/api/student', studentRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});



const startServer = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();