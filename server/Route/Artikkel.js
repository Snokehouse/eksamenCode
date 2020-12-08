import express from 'express';
import { artikkelController } from '../Controller/index.js';

const router = express.Router();

router.post('/', artikkelController.createArtikkel);
router.get('/:id', artikkelController.getArtikkel);
router.get('/', artikkelController.getArtikler);
router.put('/:id', artikkelController.update);
router.delete('/:id', artikkelController.remove);

export default router;
