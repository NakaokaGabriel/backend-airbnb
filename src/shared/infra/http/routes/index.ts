import { Router } from 'express';

import hostRouter from '@modules/host/infra/http/routes/host.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import remainsRouter from '@modules/remain/infra/http/routes/remains.routes';

const routes = Router();

routes.use('/hosts', hostRouter);
routes.use('/users', usersRouter);
routes.use('/remains', remainsRouter);

export default routes;
