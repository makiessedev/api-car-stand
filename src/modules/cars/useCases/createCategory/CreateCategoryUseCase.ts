import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  public execute({ name, description }: IRequest): void {
    const findCategory = this.categoriesRepository.findByName(name);

    if (findCategory) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}
