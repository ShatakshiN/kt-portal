const Team = require('../models/client');

const seedClient = async () => {
    await Team.bulkCreate([
        { name: 'Shilpa', project_code: 'P004', team_code: 'T004', is_lead: true, description: 'Responsible for access request approvals and for all the access related problems.' },
        { name: 'Rahul', project_code: 'P004', team_code: 'T004', is_lead: false, description: 'Responsible for access request approvals and for all the access related problems.' },
        { name: 'Nisha', project_code: 'P005', team_code: 'T005', is_lead: true, description: 'Creating requirements for development team.' },
        { name: 'Pranav', project_code: 'P005', team_code: 'T005', is_lead: false, description: 'Creating requirements for development team.' },
        { name: 'Shilpa', project_code: 'P006', team_code: 'T006', is_lead: true, description: 'Handling client communication, feedback, and project alignment.' },
        { name: 'Shilpa', project_code: 'P006', team_code: 'T006', is_lead: false, description: 'Handling client communication, feedback, and project alignment.' },
    ]);
};

module.exports = seedClient;