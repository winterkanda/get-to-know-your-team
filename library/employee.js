class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
        
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
};

module.exports = Employee;