const Team = require('../models/team');
const Employee = require('../models/employee');
const ClientTeam = require('../models/client');

exports.teamInfo = async (req, res, next) => {
  try {
    const teams = await Team.findAll({
      include: {
        model: Employee,
        as: 'Employees', // make sure this matches your alias in association
        through: { attributes: ['is_lead'] },
        attributes: ['empId', 'name', 'email'],
      },
      order: [['team_code', 'ASC']],
    });

    const result = teams.map(team => ({
      team_code: team.team_code,
      name: team.name,
      description: team.description,
      members: (team.Employees || []).map(emp => ({
        empId: emp.empId,
        name: emp.name,
        email: emp.email
      }))
    }));

    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch team data' });
  }

};

exports.clientTeamInfo = async (req, res, next) => {
  try {
    const clientTeams = await ClientTeam.findAll({
      order: [['team_code', 'ASC']],
    });

    const groupedTeams = {};

    clientTeams.forEach(member => {
      if (!groupedTeams[member.team_code]) {
        groupedTeams[member.team_code] = {
          name: member.team_name,
          description: member.description,
          team_code: member.team_code,
          project_code: member.project_code,
          members: []
        };
      }

      groupedTeams[member.team_code].members.push({
        name: member.name,
        is_lead: member.is_lead
      });
    });

    res.status(200).json(Object.values(groupedTeams));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch client team data' });
  }
};