// import Manager.js and Employee.js files from lib folder
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { test } = require("@jest/globals");

// test to check manager's office number
test("check manager's office number", () => {
    const manager = new Manager('Sam', 1, "test@test.com", 51);
    expect(manager.officeNumber).toBe(51);
});

// test to get manager's office number
test("get manager's office number", () => {
    const manager = new Manager('Sam', 1, "test@test.com", 51);
    expect(manager.getOfficeNumber()).toBe(51);
});

// test to get manager's role/title
test("get manager's role to return 'Manager'", () => {
    const testRole = "Manager";
    const manager = new Manager('Sam', 1, "test@test.com", 51);
    expect(manager.getRole()).toBe(testRole);
});