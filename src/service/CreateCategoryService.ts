import { ICategoriesRepository } from '../repositories/ICategorieRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute({ name, description }: IRequest): void {
    const findCategory = this.categoriesRepository.findByName(name);

    if (findCategory) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}
