// import Employee.js file from lib folder
const Employee = require("./Employee");

// engineer object
class Engineer extends Employee {
    constructor(name, id, email, github) {
        // import the name, id, email information from Employee.js file as parent class
        super (name, id, email);
        this.github = github;
        this.title = "Engineer";
    };
    // get engineer's Github information
    getGithub() {
        return this.github;
    };
    // get engineer's title/role
    getRole() {
        return this.title;
    }    
}

module.exports = Engineer;