import { Request, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

class ImportCategoryController {
  constructor(private importCateogryUseCase: ImportCategoryUseCase) {}
  handle(request: Request, response: Response): Response {
    const { file } = request

    this.importCateogryUseCase.execute(file)

    return response.send()
  }
}

export { ImportCategoryController }
