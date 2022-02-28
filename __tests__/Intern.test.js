// import Engineer
const Intern = require("../lib/Intern");

test('test intern object', () => {
    const intern = new Intern('SteveJobs', 249, 'BigSteveJ@HewlettPackard.com', 'Reed College');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});
