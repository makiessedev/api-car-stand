import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';
import { ListSpecificationsController } from './ListSpecificationsController';

const specificationRepository = SpecificationsRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(
  specificationRepository
);

export const listSpecificationsController = new ListSpecificationsController(
  listSpecificationsUseCase
);
