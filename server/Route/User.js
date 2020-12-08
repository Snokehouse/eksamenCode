import express from 'express';
import { userController } from '../Controller/index.js'; // kunne skrevet import {get, create} from '../Controller/User.js'; og brukt router.get('/users', get); istedet f eks

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);

export default router;
