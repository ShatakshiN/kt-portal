const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase');

const User = sequelize.define('user', {
    /* sr_no: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    }, */
    employee_Id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'employees', // should reference this table
            key: 'empId'
        },

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false

    }
})

module.exports = User;