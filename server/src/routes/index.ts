import { Router } from 'express'

import { categoriesRouter } from './categories.routes'
import { specificationRoutes } from './specification.routes'

const router = Router()
router.use('/categories', categoriesRouter)
router.use('/specification', specificationRoutes)

export { router }
