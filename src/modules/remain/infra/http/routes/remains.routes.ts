import { Router } from 'express';

import CountryRemainController from '../controllers/CountryRemainController';

const routes = Router();

routes.get('/country', CountryRemainController.index);

export default routes;
