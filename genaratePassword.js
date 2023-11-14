async function generatePassword() {
  const length = document.getElementById("length").value;
  const useUpperCase = document.getElementById("checkboxUpperCase").checked;
  const useLowerCase = document.getElementById("checkboxLowerCase").checked;
  const useNumber = document.getElementById("checkboxNumber").checked;
  const useSpecialChar = document.getElementById("checkboxSpecialChar").checked;

  const response = await fetch("http://localhost:8181/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      length,
      useUpperCase,
      useLowerCase,
      useNumber,
      useSpecialChar,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    document.getElementById("generatedPassword").innerText = data.password;
  } else {
    alert(`Fehlermeldung: ${data.error}`);
  }
}
