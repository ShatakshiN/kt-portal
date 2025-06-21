// records of diff teams assigned to the same project such as dev, devOops, testing, QA etc ..... each team will also have diff project code eg for project 101- team A = 1011 etc 

const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase');

const Team = sequelize.define('team', {
    team_code: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    project_code: {
        type: Sequelize.STRING,
        foreignKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Team;