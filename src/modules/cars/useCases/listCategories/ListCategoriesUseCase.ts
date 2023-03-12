import { SpecificationModel } from '../../model/SpecificationModel';
import { CategoriesRepository } from '../../repositories/CategoriesRepository';

export class ListCategoriesUseCase {
  constructor(private categoriesRepositor: CategoriesRepository) {}

  public execute(): SpecificationModel[] {
    return this.categoriesRepositor.list();
  }
}
