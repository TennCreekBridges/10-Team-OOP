// import Employee.js
const Employee = require("./Employee");

// Engineer class uses Employee class as base to generate objects
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

// export Engineer module
module.exports = Engineer;
