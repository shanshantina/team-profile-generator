// import Employee.js file from lib folder
const Employee = require("./Employee");

// intern object
class Intern extends Employee {
    constructor(name, id, email, school) {
        // import the name, id, email information from Employee.js file as parent class
        super (name, id, email);
        this.school = school;
        this.title = "Intern"
    };
    // get intern's school information
    getSchool() {
        return this.school;
    };
    // get intern's title/role
    getRole() {
        return this.title;
    }
};

module.exports = Intern;