const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Funcionando");
});

app.listen(3333, () => console.log("🚀🚀 Server listening on port 3333 🚀🚀"));
