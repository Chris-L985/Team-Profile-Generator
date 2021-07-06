const Engineer = require("../lib/Engineer");

test("creates a new engineer object", () => {
    // function to test new engineer
  const engineer = new Engineer("Josh", 26, "josh@david.com", "Josh@github.com");

  expect(engineer.name).toBe("Josh");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("josh@david.com");
  expect(typeof engineer.enterName()).toBe('string');
  expect(engineer.enterId()).toEqual(expect.any(Number));
  expect(engineer.enterEmail()).toEqual(
    expect.stringContaining(engineer.email.toString())
    
  );
  // engineer github 
  expect(engineer.github).toBe("Josh@github.com");
  expect(engineer.enterGitHub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
  expect(engineer.getRole()).toEqual("Engineer");
});