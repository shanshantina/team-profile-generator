// employee object
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
    };
    // get employee's name
    getName() {
        return this.name;
    };
    // get employee's id
    getId() {
        return this.id;
    };
    // get employee's email
    getEmail() {
        return this.email;
    };
    // get employee's title/role
    getRole() {
        return this.title;
    };    
};

module.exports = Employee;