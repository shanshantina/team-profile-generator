// import Employee.js file from lib folder
const Employee = require("./Employee");

// manager object
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // import the name, id, email information from Employee.js file as parent class
        super (name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    };
    // get manager's office number
    getOfficeNumber() {
        return this.officeNumber;
    };
    // get manager's role/title
    getRole() {
        return this.title;
    };
};

module.exports = Manager;