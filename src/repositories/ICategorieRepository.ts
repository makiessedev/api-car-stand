import { CategoryModel } from '../model/CategoryModel';

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  create({name, description}: ICreateCategoryDTO): void;
  list(): CategoryModel[];
  findByName(name: string): CategoryModel;
}
