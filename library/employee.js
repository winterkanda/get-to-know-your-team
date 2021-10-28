class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = 'Employee';
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getName() {
        return this.name;
    };

    getRole() {
        return this.role;
    };
};

module.exports = Employee;