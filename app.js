const express = require('express');
const app = express();
//const mongoose = require('mongoose');
const sequelize = require('./util/dataBase')
const cors = require('cors');
const Employee = require('./backend/models/employee');
const Project = require('./backend/models/project');
const User = require('./backend/models/user');
const Team = require('./backend/models/team');
const TeamMembers = require('./backend/models/teamMembers');
const runAllSeeders = require('./backend/seeders/allSeeders');




require('dotenv').config();

app.use(express.json());
app.use(cors());

//routes
const userRoutes = require('./backend/routes/userRoute');
const teamRoutes = require('./backend/routes/teamRoute');


app.use('/user' , userRoutes);
app.use('/team', teamRoutes);


//Associations

Employee.belongsToMany(Project, { through: 'employee_project', foreignKey: 'empId' }); //many employee can be assigned many projects 
Project.belongsToMany(Employee, {through: 'employee_project', foreignKey: 'project_code'});

Employee.belongsToMany(Team, { through: TeamMembers, foreignKey: 'empId', as: 'Teams' }); // many emplyee can in many team
Team.belongsToMany(Employee, {through: TeamMembers,foreignKey: 'team_code', as: 'Employees'});

Project.hasMany(Team, {constraints: true, onDelete: 'CASCADE'});
Team.belongsTo(Project, {constraints: true, onDelete: 'CASCADE'});



sequelize.sync()
  .then(async () => {
    //await runAllSeeders();
    app.listen(process.env.PORT || 4000, () => {
      console.log('Server is running on port 4000');
    });
  })
  .catch((error) => {
    console.error( error);
  });