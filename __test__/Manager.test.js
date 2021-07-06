const Manager = require("../lib/Manager");

test("creates a new manager object", () => {
    // function to test new employee
  const manager = new Manager("Justin", 29, "justin@david.com", 320);

  expect(manager.name).toBe("Justin");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("justin@david.com");
  expect(typeof manager.enterName()).toBe('string');
  expect(manager.enterId()).toEqual(expect.any(Number));
  expect(manager.enterEmail()).toEqual(
    expect.stringContaining(manager.email.toString())
  );
  expect(manager.officeNum).toEqual(expect.any(Number));
  expect(manager.getRole()).toEqual("Manager");
});