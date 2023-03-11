import { SpecificationModel } from '../model/SpecificationModel';

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): SpecificationModel;
}
