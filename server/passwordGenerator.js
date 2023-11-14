function generatePassword({
  length,
  useUpperCase,
  useLowerCase,
  useNumber,
  useSpecialChar,
}) {
  let charset = "";
  let password = "";

  if (useUpperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useLowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (useNumber) charset += "0123456789";
  if (useSpecialChar) charset += "!@#$%^&*()-_+=<>?";

  if (!charset) {
    throw new Error("Es muss mindestens ein Zeichensatz ausgewählt werden.");
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
}

module.exports = { generatePassword };
