const { expect, test } = require("@jest/globals");
const Employee = require("../lib/Employee");

test('create an employee object', () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("set the employee's name", () => {
    const employee = new Employee('Dave');
    expect(employee.name).toBe('Dave');
});

test("set the employee's id", () => {
    const employee = new Employee('Dave', 100);
    expect(employee.id).toBe(100);
});

test("set the employee's email", () => {
    const employee = new Employee('Dave', 1, "test@test.com");
    expect(employee.email).toBe("test@test.com");
});

test("get the employee's name", () => {
    const employee = new Employee('Dave');
    expect(employee.getName()).toBe('Dave');
});

test("get the employee's id", () => {
    const employee = new Employee('Dave', 100);
    expect(employee.getId()).toBe(100);
});

test("get the employee's email", () => {
    const employee = new Employee('Dave', 1, "test@test.com");
    expect(employee.getEmail()).toBe("test@test.com");
});

test("get the employee's role to return 'Employee'", () => {
    const testRole = "Employee";
    const employee = new Employee('Dave', 1, "test@test.com");
    expect(employee.getRole()).toBe(testRole);
})