// import intern.js file from lib folder
const Intern = require('../lib/Intern');

// test to check intern's school name
test("check intern's school", () => {
    const intern = new Intern('Tim', 1, "test@test.com", "UofT");
    expect(intern.school).toBe('UofT');
});

// test to get intern's school information
test("get intern's school information", () => {
    const intern = new Intern('Tim', 1, "test@test.com", "UofT");
    expect(intern.getSchool()).toBe('UofT');
});

// test to get intern's role/title
test("get intern's role to return 'Intern'", () => {
    const testRole = "Intern";
    const intern = new Intern('Tim', 1, "test@test.com", "UofT");
    expect(intern.getRole()).toBe(testRole);
});