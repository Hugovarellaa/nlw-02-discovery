import express from "express";

import { categoriesRouter } from "./routes/Categories.routes";

const app = express();
app.use(express.json());
app.use("/categories", categoriesRouter);

app.listen(3333, () => console.log("Server started on port 3333"));
