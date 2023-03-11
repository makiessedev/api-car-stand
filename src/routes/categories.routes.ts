import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

export const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const findCategory = categoriesRepository.findByName(name);

  if (findCategory) {
    response.status(400).send({ error: 'Category already exists!' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.send(categories);
});
