// import Employee.js
const Employee = require("./Employee");

// Intern class uses Employee class as base to generate objects
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}

// export Intern constructor
module.exports = Intern;
