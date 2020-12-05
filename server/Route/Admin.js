import express from 'express';
import {adminController} from '../Controller/index.js'; // kunne skrevet import {get, create} from '../Controller/User.js'; og brukt router.get('/users', get); istedet f eks

const router = express.Router();

router.post('/', adminController.createAdmin);
router.get('/:id', adminController.getAdmin);
router.get('/', adminController.list);

export default router;
