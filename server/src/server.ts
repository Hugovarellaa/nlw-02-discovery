import express from 'express'
import { categoriesRouter } from './routes/categories.routes'
import { specificationRoutes } from './routes/specification.routes'

const app = express()
app.use(express.json())
app.use('/categories', categoriesRouter)
app.use('/specification', specificationRoutes)

app.get('/', (req, res) => {
  const { name } = req.body
  return res.json({ message: 'Ola mundo novamente' })
})

app.listen(3333, () => console.log('Server is running in port 3333'))
