import { Router } from 'express';

import HostControllers from '../controllers/HostControllers';

const routes = Router();

routes.post('', HostControllers.create);

export default routes;
