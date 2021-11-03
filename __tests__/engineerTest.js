const Engineer = require("../library/engineer");
const engineer = new Engineer("Bob", "bob@gmail.com", 1, "bob/github.com");

test("all engineer's should have the correct role assigned", () => {
    
    expect(engineer.role).toEqual("Engineer")
})

test("all engineer's should have a github", () => {
    
    expect(engineer.github).toEqual("bob/github.com")
})