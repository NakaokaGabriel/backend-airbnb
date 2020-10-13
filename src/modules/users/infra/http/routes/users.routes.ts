import { Router } from 'express';

import UsersController from '../controller/UsersController';

const routes = Router();

routes.post('/', UsersController.create);

export default routes;
