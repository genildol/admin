import { Router } from 'express';
import { getAllUsers } from '../controllers/userControllers';

const router = Router();

// POST /users → cria um novo usuário
router.post('/', createUser);

router.get('/', getAllUsers);

export default router;
