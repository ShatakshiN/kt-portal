const seedClient = require('./seedClient');
const seedEmployees = require('./seedEmployee');
const seedEmployeeProjects = require('./seedEmployeeProjects');
const seedProjects = require('./seedProject');
const seedTeamMembers = require('./seedTeamMembers');
const seedTeams = require('./seedTeams');

const runAllSeeders = async () => {
  console.log('Running seeders');
  await seedEmployees();
  await seedProjects();
  await seedTeams();
  await seedEmployeeProjects();
  await seedTeamMembers();
  await seedClient();
  console.log(' seeders complete!');
};

module.exports = runAllSeeders;
