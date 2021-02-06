// import engineer.js file from lib folder
const Engineer = require("../lib/Engineer");

// test to check engineer's Github account
test("check engineer's GitHub account", () => {
    const testAcct = "GitHubUser";
    const engineer = new Engineer('Dave', 1, "test@test.com", testAcct);
    expect(engineer.github).toBe(testAcct);
});

// test to get engineer's Github account/username
test("get engineer's GitHub username/account", () => {
    const testUser = "GitHubUser";
    const engineer = new Engineer('Dave', 1, "test@test.com", testUser);
    expect(engineer.getGithub()).toBe(testUser);
});

// test to get engineer's role/title
test("get engineer's role to return 'Engineer'", () => {
    const testRole = "Engineer";
    const engineer = new Engineer('Dave', 1, "test@test.com", "GitHubUser");
    expect(engineer.getRole()).toBe(testRole);
})
