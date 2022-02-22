// sets Intern construct & class
const Employee = require("./Employee");

// Intern class uses Employee class as base to generate objects
class Intern extends Employee {
    constructor(data) {
        super(data);
        this.school = data.school;
    }

    getSchool() {
        return this.school;
    }
}

// export Intern constructor
module.exports = Intern;
