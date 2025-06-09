const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase')

const Team = sequelize.define("team", {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull : false
    },
    name :{
        type: Sequelize.STRING,
        allowNull: false
    },
    description: 

})