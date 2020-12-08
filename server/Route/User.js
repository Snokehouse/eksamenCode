import express from 'express';
import { userController } from '../Controller/Index.js'; // kunne skrevet import {get, create} from '../Controller/User.js'; og brukt router.get('/users', get); istedet f eks
//import { isAuthenticated } from '../middleware/Auth.js'

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);

export default router;
