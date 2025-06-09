const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase')

const Employee = sequelize.define('employee',{
    EmployeeId : {
        type : Sequelize.INTEGER,
        allowNull : false,
        primaryKey : true,
       
    },

    name : {
        type : Sequelize.STRING,
        allowNull : false  
    },

    email : {
        type : Sequelize.STRING,
        allowNull : false,
        unique: true
    },

    passWord: {
        type : Sequelize.STRING,
        allowNull :false
        
    },
    
});

module.exports = Employee;