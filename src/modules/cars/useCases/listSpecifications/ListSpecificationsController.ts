import { Request, Response } from "express";
import { ListCategoriesUseCase } from "../listCategories/ListCategoriesUseCase";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

export class ListSpecificationsController {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase){

  }

  public handle(request: Request, response: Response ): Response{
    const all = this.listSpecificationsUseCase.execute();

    return response.status(200).send(all);
  }
}