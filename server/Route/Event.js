import express from 'express';
import { eventController } from '../Controller/Index.js';
import { isAuthenticated, isAuthorized } from '../middleware/Auth.js';

const router = express.Router();

router.get('/', eventController.list);
router.get('/:id', eventController.get);
router.post(
  '/',
  [isAuthenticated, isAuthorized('admin')],
  eventController.create
);
router.put('/:id', eventController.update);
router.delete('/:id', eventController.remove);

export default router;
