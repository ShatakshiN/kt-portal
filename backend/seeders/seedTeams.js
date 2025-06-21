const Team = require('../models/team');

const seedTeams = async () => {
    await Team.bulkCreate([
        { team_code: 'T001', project_code: 'P001', name: 'Development team', description: 'Developing backend, frontend, and APIs for robust platforms.' },
        { team_code: 'T002', project_code: 'P002', name: 'Technical Support team', description: 'Managing support tickets and delivering quick fixes to technical problems' },
        { team_code: 'T003', project_code: 'P003', name: 'DevOps Team', description: 'Responsible for all code migration, build, and release.' }
    
        /* { team_code: 'T004', project_code: 'P004', name: 'Client Development Team', description: 'Responsible for access request approvals and for all the access related problems.' },
        { team_code: 'T005', project_code: 'P005', name: 'Client Business Team', description: 'Creating requirements for development team.' },
        { team_code: 'T006', project_code: 'P006', name: 'Client Management Team', description: 'Handling client communication, feedback, and project alignment.' } */
    ]);
};

module.exports = seedTeams;