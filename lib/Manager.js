// import Employee
const Employee = require("./Employee");

// Manager class uses Employee class as base to generate objects
class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
}

// exports Manager module
module.exports = Manager