const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase');

const TeamMembers = sequelize.define('teamMember', {
    empId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    team_code: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    is_lead: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    }


});

module.exports = TeamMembers;