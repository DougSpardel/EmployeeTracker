const inquirer = require('inquirer');
const Department = require('./department');
const Role = require('./role');
const Employee = require('./employee');

const department = new Department();
const role = new Role();
const employee = new Employee();

function mainMenu() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit'
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          department.viewAll().then(() => mainMenu());
          break;
        case 'View all roles':
          role.viewAll().then(() => mainMenu());
          break;
        case 'View all employees':
          employee.viewAll().then(() => mainMenu());
          break;
        case 'Add a department':
          inquirer.prompt({
            name: 'name',
            type: 'input',
            message: 'What is the name of the department?',
          }).then((answer) => {
            department.add(answer.name).then(() => mainMenu());
          });
          break;
        case 'Add a role':
          inquirer.prompt([
            {
              name: 'title',
              type: 'input',
              message: 'What is the title of the role?',
            },
            {
              name: 'salary',
              type: 'input',
              message: 'What is the salary of the role?',
            },
            {
              name: 'departmentId',
              type: 'input',
              message: 'What is the department ID?',
            }
          ]).then((answers) => {
            role.add(answers.title, answers.salary, answers.departmentId).then(() => mainMenu());
          });
          break;
        case 'Add an employee':
          inquirer.prompt([
            {
              name: 'firstName',
              type: 'input',
              message: 'What is the first name of the employee?',
            },
            {
              name: 'lastName',
              type: 'input',
              message: 'What is the last name of the employee?',
            },
            {
              name: 'roleId',
              type: 'input',
              message: 'What is the role ID?',
            },
            {
              name: 'managerId',
              type: 'input',
              message: 'What is the manager ID (press enter if none)?',
              default: null
            }
          ]).then((answers) => {
            employee.add(answers.firstName, answers.lastName, answers.roleId, answers.managerId || null).then(() => mainMenu());
          });
          break;
        case 'Update an employee role':
          inquirer.prompt([
            {
              name: 'employeeId',
              type: 'input',
              message: 'What is the employee ID?',
            },
            {
              name: 'newRoleId',
              type: 'input',
              message: 'What is the new role ID?',
            }
          ]).then((answers) => {
            employee.update(answers.employeeId, answers.newRoleId).then(() => mainMenu());
          });
          break;
        case 'Exit':
          console.log('Goodbye!');
          process.exit();
      }
    });
}

module.exports = { mainMenu };
