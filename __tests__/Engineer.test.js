const Engineer = require("../lib/Engineer");

test("check engineer's GitHub account", () => {
    const testAcct = "GitHubUser";
    const engineer = new Engineer('Dave', 1, "test@test.com", testAcct);
    expect(engineer.github).toBe(testAcct);
});

test("get engineer's GitHub username/account", () => {
    const testUser = "GitHubUser";
    const engineer = new Engineer('Dave', 1, "test@test.com", testUser);
    expect(engineer.getGithub()).toBe(testUser);
});

test("get engineer's role to return 'Engineer'", () => {
    const testRole = "Engineer";
    const engineer = new Engineer('Dave', 1, "test@test.com", "GitHubUser");
    expect(engineer.getRole()).toBe(testRole);
})
