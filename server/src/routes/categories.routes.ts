import { Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/createCategory'

const categoriesRouter = Router()
const categoriesRepository = new CategoriesRepository()

categoriesRouter.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
})

categoriesRouter.get('/', (request, response) => {
  const all = categoriesRepository.list()
  return response.json(all)
})

export { categoriesRouter }
