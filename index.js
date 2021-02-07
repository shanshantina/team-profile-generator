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
            message: "What's the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter emplyee's name!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Please enter emplyee's email address!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's the employee's id number?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter emplyee's id number!");
                  return false;
                }
            }
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
                        type: 'input',
                        name: 'office',
                        message: "Please input manager's office number",
                        validate: officeInput => {
                            if (officeInput) {
                              return true;
                            } else {
                              console.log("Please enter manager's office number!");
                              return false;
                            }
                        }
                    }
                ])
                // push the manager information to employees array
                .then(function(res) {
                    const officeNumber = res.office;
                    const manager = new Manager(response.name, response.id, response.email, officeNumber, 'Manager');
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
                        message: "Please input engineer's Github username",
                        validate: githubInput => {
                            if (githubInput) {
                              return true;
                            } else {
                              console.log("Please enter engineer's Github username!");
                              return false;
                            }
                        }
                    }
                ])
                // push the engineer information to employees array
                .then(function(res) {
                    const userName = res.github;
                    const engineer = new Engineer(response.name, response.id, response.email, userName, 'Engineer');
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
                        message: "Please input intern's school",
                        validate: schoolInput => {
                            if (schoolInput) {
                              return true;
                            } else {
                              console.log("Please enter intern's school!");
                              return false;
                            }
                        }
                    }
                ])
                // push the intern information to employees array
                .then(function(res) {
                    const school = res.school;
                    const intern = new Intern(response.name, response.id, response.email, school, 'Intern');
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