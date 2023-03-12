import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification/index';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications/index';

export const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});

specificationsRoutes.get('/', (request, response) => {
  return listSpecificationsController.handle(request, response);
});
