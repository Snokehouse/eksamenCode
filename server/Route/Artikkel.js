import express from 'express';
import {artikkelController} from '../Controller/index.js'; // kunne skrevet import {get, create} from '../Controller/User.js'; og brukt router.get('/users', get); istedet f eks

const router = express.Router();

router.post('/', artikkelController.createArtikkel);
router.get('/:id', artikkelController.getArtikkel);

export default router;
