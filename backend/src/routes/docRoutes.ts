import { Router } from 'express';
import { getAllDocs } from '../controllers/docControllers';

const router = Router();

// POST /documents → cria um novo documento
router.post('/', createDoc);

router.get('/', getAllDocs);

export default router;

