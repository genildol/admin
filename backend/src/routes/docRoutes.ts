import { Router } from 'express';
import { getAllDocs } from '../controllers/docControllers';

const router = Router();

router.get('/', getAllDocs);

export default router;

