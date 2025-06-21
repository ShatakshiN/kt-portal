const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

function isStrValid(str) {
    return (str === undefined || str.length === 0);
}

exports.signup = async (req, res, next) => {
    try {
        const { name, email, EmployeeId, password } = req.body;
        console.log('backend', { name, email, password });

        if (isStrValid(email) || isStrValid(name) || isStrValid(password) || isStrValid(EmployeeId)) {
            return res.status(400).json({ err: "bad parameter" });
        }

        // Check if the email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "user already exists" });
        }

        bcrypt.hash(password, 10, async (error, hash) => {
            await User.create({ name, email, password: hash, employee_Id: EmployeeId });
        });

        return res.status(201).json({ msg: "sign up successful" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


function generateAccessToken(id) {
    return jwt.sign({ employee_Id: id }, process.env.JWT_SECRET);
}

exports.login = async(req,res,next)=>{
    try {
        const { EmployeeId, password } = req.body;

        if (isStrValid(EmployeeId) || isStrValid(password)) {
            return res.status(400).json({ message: "bad parameters" });
        }

        const loginCredentials = await User.findAll({ where: { employee_Id:EmployeeId } });

        if (loginCredentials.length > 0) {
            bcrypt.compare(password, loginCredentials[0].password, (err, result) => {
                if (err) {
                    res.status(500).json({ msg: "something went wrong" });
                }
                if (result === true) {
                    res.status(200).json({ msg: "user logged in successfully", token: generateAccessToken(loginCredentials[0].employee_Id) });
                } else {
                    return res.status(400).json({ msg: 'password incorrect' });
                }
            });
        } else {
            return res.status(404).json({ msg: "user doesn't exist" });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

