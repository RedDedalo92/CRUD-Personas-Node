import { Router} from 'express';
import { getPersonas } from '../controllers/persona.controller';

const router = Router();

router.get('/', getPersonas)

export default router;