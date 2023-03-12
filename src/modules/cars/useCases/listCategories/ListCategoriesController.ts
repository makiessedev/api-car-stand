import { Request, Response } from 'express';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  public handle(request: Request, response: Response): Response {
    const list = this.listCategoriesUseCase.execute();

    return response.status(200).send(list);
  }
}
