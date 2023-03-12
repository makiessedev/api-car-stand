import { Router } from 'express';
import { createCategoryController } from '../modules/cars/useCases/createCategory/index';
import { listCategoryController } from '../modules/cars/useCases/listCategories/index';

export const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoryController.handle(request, response);
});
