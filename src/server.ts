import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const {} = req.params;

  return res.status(201).send();
});

app.listen(3333, () => console.log("Server is running on port 3333"));
