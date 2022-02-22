// import Engineer
const Engineer = require("../lib/Engineer");

// test to see if employee has a github account
it("checks to verify that a github account was created", () => {
    const data = {
        name: "Thomas Edison",
        id: 248,
        email: "BrightIdea@ModernMan.com",
        occupation: "Engineer",
        github: "LightBulbMoment",
    }
    const engineer = new Engineer(data);

    expect (engineer.github).toEqual(expect.any(String));
});

it("returns engineer role", () => {
    const data = {
        name: "Thomas Edison",
        id: 248,
        email: "BrightIdea@ModernMan.com",
        occupation: "Engineer",
        github: "LightBulbMoment",
    };
    const engineer = new Engineer(data);

    expect(engineer.getRole()).toEqual(data.role);
});