import express from 'express';
import {kategoriController} from '../Controller/index.js';

const router = express.Router();

router.post('/', kategoriController.createKategori);
router.get('/', kategoriController.list);

export default router;
