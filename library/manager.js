const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id);
        this.officeNum = officeNum;
        this.role = 'Manager';
    };

    getOfficeNum() {
        return this.officeNum;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Manager;