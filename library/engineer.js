const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor (name, email, id, github) {
        super(name, email, id);
        this.github = github;
        this.role = 'Engineer';
    };

    getGithub() {
        return this.github;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Engineer;