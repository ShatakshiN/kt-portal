const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGODB_LINK)
    .then(() => {
        app.listen(4000, () => {
            console.log('Server running');
        });
    })
    .catch(err => {
        console.error(err.message);
    });

