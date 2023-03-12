import { SpecificationModel } from '../../model/SpecificationModel';
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from './../ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: SpecificationModel[];

  private static INSTANCE: SpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance() {
    if (!SpecificationsRepository.INSTANCE) {
      SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    }

    return SpecificationsRepository.INSTANCE;
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

  public findByName(name: string): SpecificationModel {
    const specificationName = this.specifications.find(
      (specification) => specification.name === name
    );

    return specificationName;
  }

  public list(): SpecificationModel[] {
    return this.specifications;
  }
}
