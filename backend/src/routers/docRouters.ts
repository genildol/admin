import { Router } from 'express';
import { getAllDocs } from '../controllers/doc.Controller';

const router = Router();

router.get('/', getAllDocs);

export default router;

