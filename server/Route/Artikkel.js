import express from 'express';
import { artikkelController } from '../Controller/index.js';

const router = express.Router();

router.post('/', artikkelController.createArtikkel);
router.get('/:id', artikkelController.getArtikkel);

export default router;
