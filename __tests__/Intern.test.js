// import Intern
const Intern = require("../lib/Intern");

it("creates the employee school", () => {
    const data = {
        name: "Steve Jobs",
        id: 249,
        email: "SteveJ@HewlettPackard.com",
        occupation: "Intern",
        school: "Reed College",
    };

    const intern = new Intern(data);

    expect(intern.getRole()).toEqual(data.role);
});