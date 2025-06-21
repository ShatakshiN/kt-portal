const TeamMembers = require('../models/teamMembers');

const seedTeamMembers = async () => {
    await TeamMembers.bulkCreate([
        { empId: 1, team_code: 'T001', is_lead: true },
        { empId: 2, team_code: 'T002', is_lead: false },
        { empId: 3, team_code: 'T002', is_lead: false },
        { empId: 4, team_code: 'T001', is_lead: false },
        { empId: 5, team_code: 'T003', is_lead: true },
        { empId: 6, team_code: 'T003', is_lead: false },
        { empId: 7, team_code: 'T001', is_lead: false },
        { empId: 8, team_code: 'T002', is_lead: true },
        { empId: 9, team_code: 'T003', is_lead: false },
        { empId: 10, team_code: 'T002', is_lead: false }
        
    ]);
};

module.exports = seedTeamMembers;