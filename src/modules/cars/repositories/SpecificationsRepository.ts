import { SpecificationModel } from '../model/SpecificationModel';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: SpecificationModel[];

  constructor() {
    this.specifications = [];
  }

  public create({ name, description }: ICreateSpecificationDTO): void {
    const specificationsModel = new SpecificationModel();

    Object.assign(specificationsModel, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(specificationsModel);
  }
}
