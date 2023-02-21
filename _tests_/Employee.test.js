const Employee = require("lib\Employee.js");

test("Can begin Employee instance", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe('object');
});

test("Can set name with constructors", () => {
    const name = "John";
    const emp = new Employee(name);
    expect (emp.name).toBe(name);
});

test("Can set ID with constructors", () => {
    const testValue = 100, 
    const emp = new Employee("Foo", testValue);
    expect(emp.getId()).toBe(testValue);
});

test("Can get email with getEmail function", () => {
    const testValue = "test@test.com"
    const emp = new Employee("Foo", 1, testValue);
    expect(emp.getEmail()).toBe(testValue);
});

test("Can get Employee Role with getRole function", () => {
    const testValue = "Employee";
    const emp = new Employee("John", 1, "test@test.com");
    expect(emp.getRole()).toBe(testValue);
});