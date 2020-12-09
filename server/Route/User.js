import express from 'express';
import { userController } from '../Controller/Index.js';
import { isAuthenticated } from '../middleware/Auth.js';

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);
router.get('/events', isAuthenticated, userController.listEvents);

export default router;
