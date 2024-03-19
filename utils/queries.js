const db = require('../db/connection'); // Adjust the path based on your actual db module location

const getDepartments = async () => {
  const query = 'SELECT * FROM department';
  const [departments] = await db.promise().query(query);
  return departments;
};

const getRoles = async () => {
  const query = `
    SELECT role.id, role.title, department.name AS department, role.salary
    FROM role
    JOIN department ON role.department_id = department.id`;
  const [roles] = await db.promise().query(query);
  return roles;
};

const getEmployees = async () => {
  const query = `
    SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
    FROM employee e
    LEFT JOIN employee m ON e.manager_id = m.id
    JOIN role ON e.role_id = role.id
    JOIN department ON role.department_id = department.id`;
  const [employees] = await db.promise().query(query);
  return employees;
};

const addDepartment = async (name) => {
  const query = 'INSERT INTO department (name) VALUES (?)';
  await db.promise().query(query, [name]);
};

const addRole = async (title, salary, departmentId) => {
  const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
  await db.promise().query(query, [title, salary, departmentId]);
};

const addEmployee = async (firstName, lastName, roleId, managerId) => {
  const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  await db.promise().query(query, [firstName, lastName, roleId, managerId]);
};

const updateEmployeeRole = async (employeeId, roleId) => {
  const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
  await db.promise().query(query, [roleId, employeeId]);
};

module.exports = {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole
};
