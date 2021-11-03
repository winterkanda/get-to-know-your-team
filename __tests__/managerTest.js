const Manager = require("../library/manager");
const manager = new Manager("Bob", "bob@gmail.com", 1, 2);

test("all manager's should have the correct role assigned", () => {
    
    expect(manager.role).toEqual("Manager")
})

test("all manager's should have an office number", () => {
    
    expect(manager.officeNum).toEqual(2)
})