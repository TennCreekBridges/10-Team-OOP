// import employee
const Employee = require("../lib/employee");

test('test employee object', () => {
    const employee = new Employee('Any Human', 247, 'OverAchiever@AwesomeCo.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
