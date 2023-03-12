import { Request, Response } from 'express';
import { CategoryModel } from '../../model/CategoryModel';
import { SpecificationModel } from '../../model/SpecificationModel';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

export class ListSpecificationsUseCase {
  public constructor(
    private specificationsRepository: ISpecificationsRepository
  ) {}

  public execute(): CategoryModel[] {
    return this.specificationsRepository.list();
  }
}
