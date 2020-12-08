import express from 'express';
import { authController } from '../Controller/Index.js';
import { isAuthenticated } from '../middleware/Auth.js';
import { validateFields } from '../middleware/Validate.js';
import { loginSchema } from '../Schemas/User.js';

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', validateFields(loginSchema), authController.login);
router.post('/logout', authController.logout);
router.get('/me', isAuthenticated, authController.currentUser);

export default router;
