import express from 'express';
import { kontorerController } from '../Controller/Index.js';
import { getKontorer } from '../Controller/Kontorer.js';

const router = express.Router();

router.get('/', getKontorer);

export default router;