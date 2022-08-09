import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoriesAlreadyExists = categories.find(
    (category) => category.name === name
  );

  if (categoriesAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  const category = {
    id: uuidV4(),
    creted_at: new Date(),
    name,
    description,
  };

  categories.push(category);

  return response.status(201).send(category);
});

export { categoriesRoutes };
