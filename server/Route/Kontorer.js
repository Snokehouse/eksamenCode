import express from 'express';
import { getKontorer } from '../Controller/Kontorer.js';

const router = express.Router();

router.get('/', getKontorer);

export default router;