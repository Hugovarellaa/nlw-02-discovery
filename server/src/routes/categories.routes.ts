import { Router } from 'express'
import { v4 as uuidV4 } from 'uuid'

const categoriesRouter = Router()

const categories = []

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body

  const account = {
    id: uuidV4(),
    name,
    description,
    createdAt: new Date(),
  }

  categories.push(account)

  return response.status(201).json({})
})

export { categoriesRouter }
