import express from 'express';
import { kategoriController } from '../Controller/Index.js';

const router = express.Router();

router.post('/', kategoriController.createKategori);
router.get('/', kategoriController.list);

export default router;
