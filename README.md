# Employee Tracker

## Description

Employee Tracker is a command-line application designed to help businesses efficiently manage their departments, roles, and employees. It provides an interactive experience for users to view comprehensive tables of the company's organizational structure and modify them as needed.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)
- [Walkthrough]

## Installation

To set up Employee Tracker locally, follow these steps:

1. Clone the repository to your local machine.
2. Ensure you have Node.js and MySQL installed.
3. Navigate to the root directory of the cloned repository and run `npm install` to install the required dependencies.
4. Set up the MySQL database using the schema provided in `db/sql`.
5. Configure your database connection settings in an `.env` file based on the `connection.js` setup.

## Usage

To start using Employee Tracker, follow these steps:

1. Ensure your MySQL server is running.
2. Execute `node index.js` from the root directory in your terminal.
3. Use the arrow keys to navigate through the options and press Enter to select the action you want to perform.
4. Follow the on-screen prompts to view or modify the data.

## Features

Employee Tracker allows you to:

- View all departments, including their names and IDs.
- View all roles with details such as job title, role ID, department, and salary.
- View all employees, displaying their IDs, names, job titles, departments, salaries, and managers.
- Add a new department to the database.
- Create a new role with its associated salary and department.
- Add a new employee, specifying their name, role, and manager.
- Update the role of an existing employee.

## Walkthrough Video Link
https://www.loom.com/share/ad3cc4a5c4ea4c11860db8689464c76b

## Contributing

Your contributions are welcome! If you have suggestions or improvements, please follow these steps to contribute:

1. Fork the project repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some YourFeature'`).
4. Push the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.



