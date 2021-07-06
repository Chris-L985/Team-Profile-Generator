const Intern = require("../lib/Intern");

test("creates a new intern object", () => {
    // function to test new employee
  const intern = new Intern("Jonathan", 23, "jonathan@david.com", "Education Connections");

  expect(intern.name).toBe("Jonathan");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("jonathan@david.com");
  expect(typeof intern.enterName()).toBe('string');
  expect(intern.enterId()).toEqual(expect.any(Number));
  expect(intern.enterEmail()).toEqual(
    expect.stringContaining(intern.email.toString())
  );
  // intern school
  expect(intern.school).toBe("Education Connections");
  expect(intern.enterSchool()).toEqual(expect.stringContaining(intern.school.toString())
  );
  expect(intern.getRole()).toEqual("Intern");
});