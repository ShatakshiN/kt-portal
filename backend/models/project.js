const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase')

const Project = sequelize.define('project',{
    projectId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
        
    },
    name : {
        type : Sequelize.STRING,
        allowNull : false  
    },
    documentation:{
        type : Sequelize.STRING,
    }
  
});

module.exports = Project;