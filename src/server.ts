import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.send('Hello World');
});

app.post('/courses', (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(3000, () => console.log('Server is running'));
