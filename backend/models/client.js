const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase');

const ClientTeam = sequelize.define('client_team', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    project_code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    team_code: {
        type: Sequelize.STRING,
        allowNull: false
    },
    is_lead: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = ClientTeam;