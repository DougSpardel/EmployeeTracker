const db = require('../db/connection');

class Department {
  async viewAll() {
    const query = 'SELECT * FROM department';
    const [departments] = await db.promise().query(query);
    console.log("\n");
    console.table(departments);
  }

  async add(name) {
    const query = 'INSERT INTO department (name) VALUES (?)';
    await db.promise().query(query, [name]);
    console.log(`${name} department added successfully.`);
  }
}

module.exports = Department;
