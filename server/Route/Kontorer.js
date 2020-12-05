import express from 'express';
import { writeJson } from '../Controller/Kontorer.js';

const router = express.Router();

router.get('/json', writeJson);

export default router;