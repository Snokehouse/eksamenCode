import express from 'express';
import {kategoriController} from '../Controller/index.js'; // kunne skrevet import {get, create} from '../Controller/User.js'; og brukt router.get('/users', get); istedet f eks

const router = express.Router();

router.post('/', kategoriController.createKategori);
router.get('/', kategoriController.list);

export default router;
