const db = require('../db/connection');

class Role {
  async viewAll() {
    const query = `
      SELECT role.id, role.title, department.name AS department, role.salary
      FROM role
      INNER JOIN department ON role.department_id = department.id`;
    const [roles] = await db.promise().query(query);
    console.log("\n");
    console.table(roles);
  }

  async add(title, salary, departmentId) {
    const query = 'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)';
    await db.promise().query(query, [title, salary, departmentId]);
    console.log(`${title} role added successfully.`);
  }
}

module.exports = Role;
