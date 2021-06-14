// Setting up npm dependencies
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

// Establising mymysql local host connection, establishing runTracker function
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Logan@0825!',
    database: 'employee_trackerdb',
});

connection.connect(function (err) {
    if (err) throw err;
    runTracker()
});

// Beginning the Employee Tracker by initializing inquirer to prompt the user with a set of questions
const runTracker = () => {
    inquirer.prompt({
        name: 'action',
        type: 'list',
        message: "What would you like to do with your employee database?",
        choices: [
            'View All Employees',
            'View All Employees By Department',
            'View All Employees By Manager',
            'Add An Employee',
            'Remove An Employee',
            'Update Employee Role',
            'Update Employee Manager',
            'Exit',
        ],

    })
        // Switch statments to provide user with list of options of which to interact with the employeeTracker_db
        .then((answer) => {
            switch (answer.action) {
                case 'View All Employees':
                    viewEmployees();
                    break;

                case 'View All Employees By Department':
                    viewByDepartment();
                    break;

                case 'View All Employees By Manager':
                    viewByManager();
                    break;

                case 'Add An Employee':
                    addEmployee();
                    break;

                case 'Remove An Employee':
                    removeEmployee();
                    break;

                case 'Update Employee Role':
                    updateRole();
                    break;

                case 'Update Employee Manager':
                    updateManager();
                    break;

                case 'Exit':
                    exitTracker();
                    break;

                default:
                    console.log(`Invalid action: ${answer.action}`);
                    break;
            }
        });
};
// Creating viewEmployees function to first pull all employees located within the database
function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(res.length + " employees found");
        console.table("All employees:", res);
        runTracker();
    });
}
// Creating viewByDepartment function to p
function viewByDepartment() {
    var query = "SELECT * FROM department";
    if (err) throw err;
    console.log(res.length + " employees found");
    console.table("All departments:", res);
    runTracker();
}






