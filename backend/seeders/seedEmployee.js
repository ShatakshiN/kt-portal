const Employee = require('../models/employee');

const seedEmployees = async () => {
    await Employee.bulkCreate([
        { empId: 1, name: 'Kartik', email: 'kartik@gmail.com', unit: 'DNA01', role: 'Specialist Programmer', status: 'active' },
        { empId: 2, name: 'Kratika', email: 'kratika@gmail.com', unit: 'DNA01', role: 'Analyst', status: 'active' },
        { empId: 3, name: 'Nirmit', email: 'nirmit@gmail.com', unit: 'DNA02', role: 'SDE 1', status: 'active' },
        { empId: 4, name: 'Shatakshi', email: 's@gmail.com', unit: 'DNA03', role: 'SDE1', status: 'active' },
        { empId: 5, name: 'Shashank', email: 'shashank@gmail.com', unit: 'DNA03', role: 'System Engineers', status: 'active' },
        { empId: 6, name: 'Shaishvika', email: 'shaish@gmail.com', unit: 'DNA06', role: 'DSE', status: 'active' },
        { empId: 7, name: 'Kritika', email: 'kritika@gmail.com', unit: 'DNA05', role: 'System Engineers', status: 'active' },
        { empId: 8, name: 'Manashvi', email: 'm@gmail.com', unit: 'DNA04', role: 'Analyst', status: 'active' },
        { empId: 9, name: 'Harshit', email: 'h@gmail.com', unit: 'DNA05', role: 'DSE', status: 'active' },
        { empId: 10, name: 'Ayush', email: 'a@gmail.com', unit: 'DNA06', role: 'DSE', status: 'active' },
        { empId: 11, name: 'Shalini', email: 'sha@gmail.com', unit: 'DNA04', role: 'Analyst', status: 'active' }
    ]);
};

module.exports = seedEmployees;