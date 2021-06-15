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
            'View All Employee Departments',
            'View All Employee Roles',
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

                case 'View All Employee Departments':
                    viewByDepartment();
                    break;

                case 'View All Employee Roles':
                    viewByRole();
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
// Creating viewEmployees function to first pull all employees located within the database and JOIN the employee and role databases
function viewEmployees() {
    var query = "SELECT * FROM employee JOIN role ON employee_trackerdb.employee.id = employee_trackerdb.role.id";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(res.length + "employees found");
        console.table("All employees:", res);
        runTracker();
    });
}
// Creating viewByDepartment function to view employees ID relative to the department they work in
function viewByDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(res.length + "departments found");
        console.table("All departments:", res);
        runTracker();
    });
}
// Creating viewByRole function to view all employee roles.
function viewByRole() {
    let query = "SELECT * FROM employee_trackerdb.role";
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.log(res.length + "roles found");
        console.table("All Roles:", res);
        runTracker();
    });
}
// Creating addEmployee function to generate questions to add a new employee
function addEmployee() {
    inquirer
        .prompt({
            name: 'first_name',
            type: 'input',
            message: 'Please enter employee first name',
        },
            {
                name: 'last_name',
                type: 'input',
                message: 'Please enter employee last name',
            },
            {
                name: 'role_id',
                type: 'input',
                message: 'Please enter employee role id',
            },
            {
                name: 'role_id',
                type: 'input',
                message: 'Please enter employee role id',
            },
            {
                name: 'manager_id',
                type: 'list',
                message: 'Please select employee manager',
                choices: [
                    'Monty Burns',
                    'John Frink'
                ],
            },
        )
        .then(function (answer) {

            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.first_name,

                    last_name: answer.last_name,

                    role_id: answer.role_id,

                    manager_id: answer.manager_id,
                }),
                runTracker();
        }
        )

};
// Creating final function called and last option to "Exit the tracker application"
function exitTracker() {
    connection.end();
}









