import express from 'express';
import { kontaktController } from '../Controller/index.js';

const router = express.Router();

router.post('/', kontaktController.createKontaktcase);
router.get('/', kontaktController.getKontaktcase);

export default router;
