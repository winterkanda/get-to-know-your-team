const Employee = require("../library/employee");

test("employee should have a name", () => {
    const employee = new Employee("Bob", "bob@gmail.com", 1);
    
    expect(employee.name).toEqual("Bob")
})