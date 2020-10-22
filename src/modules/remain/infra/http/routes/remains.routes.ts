import { Router } from 'express';

import RemainController from '../controllers/RemainController';

const routes = Router();

routes.get('', RemainController.index);

export default routes;
