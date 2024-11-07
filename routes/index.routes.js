// routes/index.routes.js
import { Router } from 'express';
import ejemplo from './ejemplo.routes.js';
import theOffice from './theOffice.routes.js'; // Importa las rutas de The Office

const indexRoutes = Router();

indexRoutes.use('/ejemplo', ejemplo);
indexRoutes.use('/the-office', theOffice); // Rutas de The Office

export default indexRoutes;
