import { Router } from 'express';

import hostRouter from '@modules/host/infra/http/routes/host.routes';

const routes = Router();

routes.use('/hosts', hostRouter);

export default routes;
