
require('dotenv').config();

const jwt = require('jsonwebtoken');
const Employee = require('../models/employee');

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.header('Authorization');

        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization token missing' });
        }

        const token = authHeader.replace('Bearer ', ''); // remove Bearer prefix if present

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const empId = decoded.employee_Id;

        const foundUser = await Employee.findByPk(empId);
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = foundUser;
        next();
    } catch (err) {
        console.error(err.message);
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

module.exports = authenticate;





