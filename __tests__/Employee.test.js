// import employee.js file from lib folder
const Employee = require("../lib/Employee");

// test for employee object
test('create an employee object', () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

// test to check employee's name
test("check the employee's name", () => {
    const employee = new Employee('Dave');
    expect(employee.name).toBe('Dave');
});

// test to check employee's id
test("check the employee's id", () => {
    const employee = new Employee('Dave', 100);
    expect(employee.id).toBe(100);
});

// test to check employee's email
test("check the employee's email", () => {
    const employee = new Employee('Dave', 1, "test@test.com");
    expect(employee.email).toBe("test@test.com");
});

// test to get employee's name
test("get the employee's name", () => {
    const employee = new Employee('Dave');
    expect(employee.getName()).toBe('Dave');
});

// test to get employee's id
test("get the employee's id", () => {
    const employee = new Employee('Dave', 100);
    expect(employee.getId()).toBe(100);
});

// test to get employee's email
test("get the employee's email", () => {
    const employee = new Employee('Dave', 1, "test@test.com");
    expect(employee.getEmail()).toBe("test@test.com");
});

// test to get employee's role/ title
test("get the employee's role to return 'Employee'", () => {
    const testRole = "Employee";
    const employee = new Employee('Dave', 1, "test@test.com");
    expect(employee.getRole()).toBe(testRole);
})