const Intern = require("../library/intern");
const intern = new Intern("Bob", "bob@gmail.com", 1, "USF");

test("all interns's should have the correct role assigned", () => {
    
    expect(intern.role).toEqual("Intern")
})

test("all intern's should have a school listed", () => {
    
    expect(intern.school).toEqual("USF")
})