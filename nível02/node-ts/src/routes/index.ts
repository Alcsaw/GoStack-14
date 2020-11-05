import { request, Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ status: 'OK' }));

routes.post('/users', (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

export default routes;
