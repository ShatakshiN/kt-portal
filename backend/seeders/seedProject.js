const Project = require('../models/project');

const seedProjects = async () => {
  await Project.bulkCreate([
    { project_code: 'P001', allocation_date: new Date(), end_date: new Date('2025-12-31') },
    { project_code: 'P002', allocation_date: new Date(), end_date: new Date('2025-06-30') },
    { project_code: 'P003', allocation_date: new Date(), end_date: new Date('2025-06-30') }
    
  ]);
};

module.exports = seedProjects;