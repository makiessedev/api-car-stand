import { Router } from 'express';
import { randomUUID } from 'node:crypto';
import { CategoryModel } from '../model/CategoryModel';

export const categoriesRoutes = Router();

const categories: CategoryModel[] = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  const category = new CategoryModel();

  Object.assign(category, {
    name,
    description,
    createdAt: new Date(),
  });

  categories.push(category);

  return response.status(201).send(categories);
});
