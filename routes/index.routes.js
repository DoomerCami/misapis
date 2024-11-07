import ejemplo from './ejemplo.routes.js';
import { Router } from 'express';
import theOfficeRouter from './theOffice.routes.js';

const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/the-office', theOfficeRouter);

export default indexRoutes;