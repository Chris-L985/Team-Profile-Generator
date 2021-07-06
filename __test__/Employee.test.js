const Employee = require("../lib/Employee");

test("creates a new employee object", () => {
    // function to test new employee
  const employee = new Employee("David", 18, "david@david.com");

  expect(employee.name).toBe("David");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("david@david.com");
  expect(typeof employee.enterName()).toBe('string');
  expect(employee.enterId()).toEqual(expect.any(Number));
  expect(employee.enterEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
  expect(employee.getRole()).toEqual("Employee");
});