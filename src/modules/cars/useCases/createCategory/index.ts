import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CreateCategoryController } from './createCategoryController';

const categoryRepositor = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepositor);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
