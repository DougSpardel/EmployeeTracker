const db = require('../db/connection');

class Employee {
  async viewAll() {
    const query = `
      SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      LEFT JOIN employee m ON e.manager_id = m.id
      INNER JOIN role ON e.role_id = role.id
      INNER JOIN department ON role.department_id = department.id`;
    const [employees] = await db.promise().query(query);
    console.log("\n");
    console.table(employees);
  }

  async add(firstName, lastName, roleId, managerId) {
    const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
    await db.promise().query(query, [firstName, lastName, roleId, managerId]);
    console.log(`Employee ${firstName} ${lastName} added successfully.`);
  }

  async update(employeeId, roleId) {
    const query = 'UPDATE employee SET role_id = ? WHERE id = ?';
    await db.promise().query(query, [roleId, employeeId]);
    console.log(`Employee role updated successfully.`);
  }
}

module.exports = Employee;
