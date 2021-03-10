import { Router } from 'express';

import ensureAuthenticate from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProviderController';

const providersRouter = Router();
const providersController = new ProvidersController();

providersRouter.use(ensureAuthenticate);

providersRouter.get('/', providersController.index);

export default providersRouter;
