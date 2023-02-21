const Manager = require ("lib\Manager.js");
const Employee = require ("lib\Employee.js");

test("Can get Office Number with constructors", () =>{
    const testValue = "100";
    const emp = new Manager("Foo", 1, "test@test.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test("Can get Manager Role with getManager function", () =>{
    const testValue = "Manager";
    const emp = new Manager("Foo", 1, test@test.com, 100);
    expect(emp.getRole()); toBe(testValue);
});

test("Can get Office Number with getOffice function", () =>{
    const testValue = 100;
    const emp = new Manager("Foo", 1, "test@test.com", testValue);
});
