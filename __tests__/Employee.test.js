// import Employee
const Employee = require("../lib/Employee");

// set test criteria
describe("Employee", () => {
  const employee = new Employee(
    "Bridgett",
    247,
    "BridgettValet@gmail.com",
    "Employee"
  );

  // test for name
  test("does the employee have a name?", () => {
    expect(employee.name).toEqual(expect.any(String));
  });

  // test for id number
  test("does the employee have an ID number?", () => {
    expect(employee.id).toEqual(expect.any(Number));
  });

  // test for email address and validate
  test("is the email address entered valid?", () => {
    expect(employee.email).toEqual(expect.stringContaining("@"));
  });

  // test role to be Employee
  test("is the employee role === employee?", () => {
    expect(employee.role).toBe("Employee");
  });
});
