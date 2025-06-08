const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


require('dotenv').config();

//models
const Users = require('../models/user');


function isStrValid(str) {
    return (str === undefined || str.length === 0);
};

exports.signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log('backend', { name, email, password });

        if (isStrValid(email) || isStrValid(name) || isStrValid(password)) {
            return res.status(400).json({ err: "bad parameter" });
        }

        
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: "user already exists" });
        }

        bcrypt.hash(password, 10, async (error, hash) => {
            await User.create({ name, email, passWord: hash });
        });

        return res.status(201).json({ msg: "sign up successful" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

