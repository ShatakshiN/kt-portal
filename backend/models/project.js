const Sequelize = require('sequelize');
const sequelize = require('../../util/dataBase');

const Project = sequelize.define('project', {

    project_code: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },
    allocation_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Project;