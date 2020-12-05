import express from 'express';
import { writeJson } from '../Controller/Kontorer.js';
import router from './admin.js';

const router = express.Router();

router.get('/json', writeJson);

export default router;