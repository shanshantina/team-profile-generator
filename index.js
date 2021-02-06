// import inquirer, fs, and css
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);



// import Engineer.js, Intern.js, Manager.js from lib folder
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const generatePage = require('./src/generate-profile.js'); 

// make a array for the team employees
const employees = [];

// prompt the user with the questions
const promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the employee's name?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the employee's email address?"
        },
        {
            type: 'number',
            name: 'id',
            message: "What's the employee's id number?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What's the employee's postion/title at your company?",
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
    // separate the role of the employees
    .then(function(response) {
        switch (response.role) {
            // get the office number if the role is manager
            case 'Manager':
                inquirer.prompt([
                    {
                        type: 'number',
                        name: 'office',
                        message: "Please input manager's office number"
                    }
                ])
                // push the manager information to employees array
                .then(function(res) {
                    const officeNumber = res.office;
                    console.log(officeNumber);
                    const manager = new Manager(response.name, response.email, response.id, officeNumber, 'Manager');
                    employees.push(manager);
                }) 
                .then(function() {
                    addMore();
                });
                break;
            // get the github username if the role is engineer
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'github',
                        message: "Please input engineer's Github username"
                    }
                ])
                // push the engineer information to employees array
                .then(function(res) {
                    const userName = res.github;
                    const engineer = new Engineer(response.name, response.email, response.id, userName, 'Engineer');
                    employees.push(engineer);
                })
                .then(function() {
                    addMore();
                });
                break;
            // get the school information if the role is intern
            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: "Please input intern's school"
                    }
                ])
                // push the intern information to employees array
                .then(function(res) {
                    const school = res.school;
                    const intern = new Intern(response.name, response.email, response.id, school, 'Intern');
                    employees.push(intern);
                })
                .then(function() {
                    addMore();
                });
                break;      
        }
    })
    .then(function() {

    });
};

// check if the user wants to add more employees to the profile
const addMore = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?',
            default: true
        }
    ])
    .then(function(res) {
        if (res.confirmAdd) {
            promptUser();
        } else {
            console.log('Completed');
            completedFile(employees);
        }
    });
};

// generate the completed file to dist folder
function completedFile(employees) {
    console.log("Success!");
    const html = generatePage(employees);
    writeFileAsync("./dist/team-profile.html", html, "utf-8");
};


function init() {
    console.log("Please input employee's information");
    promptUser();
};

// Function call to initialize app
init();