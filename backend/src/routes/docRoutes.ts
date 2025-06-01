import { Router } from 'express';
import { getAllDocs } from '../controllers/doc.Controllers';

const router = Router();

router.get('/', getAllDocs);

export default router;

