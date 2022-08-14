import { Category } from "../model/Category";

interface CreateCategoryDTO {
  name: string;
  description: string;
}

class CategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }

  create({ description, name }: CreateCategoryDTO): void {
    const category: Category = new Category();
    Object.assign(category, { description, name, created_at: new Date() });

    this.categories.push(category);
  }
}

export { CategoriesRepository };
