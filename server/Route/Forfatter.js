import express from 'express';
import { getForfatter } from '../Controller/Forfatter.js';

const router = express.Router();

router.get('/', getForfatter);

export default router;