const Intern = require("../lib/Intern");

test("Can get school info via constructor", () => {
    const testValue = "MIT of Argentina";
    const emp = new Intern("Foo", 1, "test@test.com", testValue);
    expect(emp.school).toBe(testValue);
});

test("Can get Intern Role with getRole function", ()=> {
    const testValue = "Intern";
    const emp = new Intern("Foo", 1, "test@test.com", "MIT of Argentina");
    expect(emp.getRole()).toBe(testValue);
});

test("getSchool function can get School info", () =>{
    const testValue = "MIT of Argentina";
    const emp = new Intern("Foo", 1, "test@test.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});