const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passwordGenerator = require("./passwordGenerator");

const app = express();
const PORT = 8181;

app.use(cors()); // Aktiviert CORS für alle Routen

app.use(bodyParser.json());

app.post("/api/generate", (req, res) => {
  try {
    const { length, useUpperCase, useLowerCase, useNumber, useSpecialChar } =
      req.body;

    const password = passwordGenerator.generatePassword({
      length,
      useUpperCase,
      useLowerCase,
      useNumber,
      useSpecialChar,
    });

    res.status(200).json({ password });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
