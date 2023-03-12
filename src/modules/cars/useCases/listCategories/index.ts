import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';
import { ListCategoriesController } from './ListCategoriesController';

const categoriesRepository = new CategoriesRepository();
const listCategoryUseCase = new ListCategoriesUseCase(categoriesRepository);

export const listCategoryController = new ListCategoriesController(
  listCategoryUseCase
);
