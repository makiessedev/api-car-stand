import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  public execute({ name, description }: IRequest): void {
    const specificationName = this.specificationRepository.findByName(name);

    if (specificationName) {
      throw new Error('Specification already exists');
    }

    this.specificationRepository.create({ name, description });
  }
}
