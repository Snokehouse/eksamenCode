import express from 'express';
import { imageController } from '../Controller/Index.js';
import { upload } from '../middleware/Image.js';

const router = express.Router();

router.post('/upload', upload, imageController.create);
router.get('/download/:id', imageController.get);

export default router;