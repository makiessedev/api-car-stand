import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CreateCategoryController } from './createCategoryController';

const categoryRepositor = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoryRepositor);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
