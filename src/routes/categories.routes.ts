import { Router } from "express";
import { Category } from "../model/Category";

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoriesAlreadyExists = categories.find(
    (category) => category.name === name
  );

  if (categoriesAlreadyExists) {
    return response.status(400).json({ error: "Category already exists!" });
  }

  const category = new Category();
  Object.assign(category, { name, description, created_at: new Date() });

  categories.push(category);

  return response.status(201).send(category);
});

export { categoriesRoutes };
