const Engineer = require("lib\Engineer.js");

test("Can get gitHub acct with constructor", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Foo", 1 , test@test.com);
    expect(emp.gitHub).toBe(testValue);
});

test ("Can get Engineer Role with getRole function", () => {
    const testValue = "Engineer";
    const emp = new Engineer("Foo", 1, "test@test.com", GitHubUser);
    expect(emp.getRole()).toBe(testValue);
});

test("Can get GitHub username with github function", () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Foo", 1, "test@test.com", testValue);
    expect(emp.getGithub()).toBe(testValue);
});
