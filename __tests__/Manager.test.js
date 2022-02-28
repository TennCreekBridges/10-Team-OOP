// import Manager
const Manager = require("../lib/Manager");

test('test manager object', () => {
    const manager = new Manager('Jeff Bezos', 250, 'MoonShot@Amazon.com', 10);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
});