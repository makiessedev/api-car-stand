import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationService {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  public execute({ name, description }: IRequest): void {
    this.specificationRepository.create({ name, description });
  }
}
