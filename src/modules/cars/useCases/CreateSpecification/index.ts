import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationRepository();
const specificationsUseCase = new CreateSpecificationUseCase(
  specificationsRepository
);
const specificationsController = new CreateSpecificationController(
  specificationsUseCase
);

export { specificationsController };
