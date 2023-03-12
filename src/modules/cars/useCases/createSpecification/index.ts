import { SpecificationsRepository } from '../../repositories/SpecificationsRepository';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { CreateSpecificationController } from './CreateSpecificationController';

const specificationRepository = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase(
  specificationRepository
);

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);
