import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send('<h1>Hello world</h1>');
});

export default routes;
