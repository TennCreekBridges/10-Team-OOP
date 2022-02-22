// sets Engineer construct & class
const Employee = require("./Employee");

// Engineer class uses Employee class as base to generate objects
class Engineer extends Employee {
    constructor(data) {
        super(data);
        this.github = data.github;
    }

    getRole() {
        return this.role;
    }
}

// export Engineer module
module.exports = Engineer;
