// sets Manager class/constructor
const Employee = require("./Employee");

// Manager class uses Employee class as base to generate objects
class Manager extends Employee {
    constructor(data) {
        super(data);
        this.office = data.office;
    }

// override to return 'Manager'
    getRole() {
        return this.role;
    }
}

// exports Manager module
module.exports = Manager;