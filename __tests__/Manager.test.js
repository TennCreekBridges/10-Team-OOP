// import Manager
const Manager = require("../lib/Manager");

// test to see if employee has an office number
it("adds employee office number", () => {
    const data = {
        name: "Jeff Bezos",
        id: 250,
        email: "Moonshot@Amazon.com",
        occupation: "Manager",
        office: 10,
    };
    const manager = new Manager(data);

    expect(manager.office).toEqual(expect.any(Number));
});

it("returns the manager role", () => {
    const data = {
        name: "Jeff Bezos",
        id: 250,
        email: "Moonshot@Amazon.com",
        occupation: "Manager",
        office: 10,
    };
    const manager = new Manager(data);

    expect(manager.getRole()).toEqual(data.role);
});
