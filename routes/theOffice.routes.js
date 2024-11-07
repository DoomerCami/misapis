// routes/theOffice.routes.js
import { Router } from 'express';
import {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    updateCharacter,
    deleteCharacter
} from '../controllers/theOffice.controller.js';

const theOfficeRouter = Router();

theOfficeRouter.get('/', getAllCharacters);
theOfficeRouter.get('/:id', getCharacterById);
theOfficeRouter.post('/', createCharacter);
theOfficeRouter.put('/:id', updateCharacter);
theOfficeRouter.delete('/:id', deleteCharacter);

export default theOfficeRouter;
