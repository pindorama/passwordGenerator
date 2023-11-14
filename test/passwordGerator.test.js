const { generatePassword } = require("../server/passwordGenerator");

describe("generatePassword function", () => {
  test("should generate a password of the specified length", () => {
    const password = generatePassword({
      length: 8,
      useUpperCase: true,
      useLowerCase: true,
      useNumber: true,
      useSpecialChar: true,
    });

    expect(password).toHaveLength(8);
  });

  test("should fail when all boolean options are false", () => {
    const options = {
      length: 10,
      useUpperCase: false,
      useLowerCase: false,
      useNumber: false,
      useSpecialChar: false,
    };

    // Since all boolean options are false, the function should fail
    expect(() => generatePassword(options)).toThrow(
      "At least one character set must be selected."
    );
  });
});
