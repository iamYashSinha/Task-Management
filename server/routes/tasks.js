import express from 'express';

import { getTasks, getTaskById, createTask } from '../controllers/tasks.js';

const router = express.Router();

router.get('/user-tasks', getTasks);
router.get('/user-tasks/:id', getTaskById);
router.post('/add/tasks', createTask);

export default router;