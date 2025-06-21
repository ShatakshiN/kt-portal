const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase')

const Employee = sequelize.define('employee',{
    empId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }  
});

module.exports = Employee;