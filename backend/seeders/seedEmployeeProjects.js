const sequelize = require('../../util/dataBase');

const seedEmployeeProjects = async () => {
    await sequelize.models.employee_project.bulkCreate([
        { empId: 1, project_code: 'P001', is_lead: true },
        { empId: 2, project_code: 'P002', is_lead: false },
        { empId: 3, project_code: 'P002', is_lead: false },
        { empId: 4, project_code: 'P001', is_lead: false },
        { empId: 5, project_code: 'P003', is_lead: true },
        { empId: 6, project_code: 'P003', is_lead: false },
        { empId: 7, project_code: 'P001', is_lead: false },
        { empId: 8, project_code: 'P002', is_lead: true },
        { empId: 9, project_code: 'P003', is_lead: false },
        { empId: 10, project_code: 'P002', is_lead: false }

    ]);
};

module.exports = seedEmployeeProjects;