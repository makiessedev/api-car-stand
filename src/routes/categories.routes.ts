import { Router } from 'express';
import { randomUUID } from 'node:crypto';

export const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;

  const category = {
    id: randomUUID(),
    name,
    description,
    createdAt: new Date(),
  };

  categories.push(category);

  return response.status(201).send();
});
