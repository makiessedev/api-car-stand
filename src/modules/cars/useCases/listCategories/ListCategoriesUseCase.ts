import { SpecificationModel } from '../../model/SpecificationModel';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class ListCategoriesUseCase {
  constructor(private categoriesRepositor: ICategoriesRepository) {}

  public execute(): SpecificationModel[] {
    return this.categoriesRepositor.list();
  }
}
