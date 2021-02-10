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
const addManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's the manager's name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter manager's name!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What's the manager's email address?",
            validate: emailInput => {
                if (emailInput.match(/\S+@\S+\.\S+/)) {
                  return true;
                } else {
                  console.log("Please enter valid email address!");
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What's the manager's id number?",
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Please enter manager's id number!");
                  return false;
                }
            }
        },
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
        const manager = new Manager(res.name, res.id, res.email, res.office, 'Manager');
        employees.push(manager);
        addEmployee();
    })  
};

// 
const addEmployee = () => {
    inquirer.prompt([
        {
           type: 'list',
           name: 'role',
           message: "What's the employee's postion/title at your company?",
           choices: ['Engineer', 'Intern']
        }
    ])
    .then(function(response) {
        switch (response.role) {
            // prompt user to input engineer's information
            case 'Engineer':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What's the engineer's name?",
                        validate: nameInput => {
                            if (nameInput) {
                              return true;
                            } else {
                              console.log("Please enter engineer's name!");
                              return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What's the engineer's email address?",
                        validate: emailInput => {
                            if (emailInput.match(/\S+@\S+\.\S+/)) {
                              return true;
                            } else {
                              console.log("Please enter valid email address!");
                              return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What's the engineer's id number?",
                        validate: idInput => {
                            if (idInput) {
                              return true;
                            } else {
                              console.log("Please enter engineer's id number!");
                              return false;
                            }
                        }
                    },
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
                    const engineer = new Engineer(res.name, res.id, res.email, res.github, 'Engineer');
                    employees.push(engineer);
                })
                .then(function() {
                    addMore();
                });
                break;
             // prompt user to input intern's information
            case 'Intern':
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What's the intern's name?",
                        validate: nameInput => {
                            if (nameInput) {
                              return true;
                            } else {
                              console.log("Please enter intern's name!");
                              return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What's the intern's email address?",
                        validate: emailInput => {
                            if (emailInput.match(/\S+@\S+\.\S+/)) {
                              return true;
                            } else {
                              console.log("Please enter valid email address!");
                              return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What's the intern's id number?",
                        validate: idInput => {
                            if (idInput) {
                              return true;
                            } else {
                              console.log("Please enter intern's id number!");
                              return false;
                            }
                        }
                    },
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
                    const intern = new Intern(res.name, res.id, res.email, res.school, 'Intern');
                    employees.push(intern);
                })
                .then(function() {
                    addMore();
                });
                break;                            
        }
    })
}

// check if the manager wants to add more employees to the profile
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
            addEmployee();
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
    console.log("Thank you for using Team Profile Generator, please input team manager's information");
    addManager();
};

// Function call to initialize app
init();