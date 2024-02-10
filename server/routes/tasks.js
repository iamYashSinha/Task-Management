import express from 'express';

import { getTasks, createTask, getUserTasks } from '../controllers/tasks.js';

const router = express.Router();

router.get('/user-tasks', getTasks);
router.post('/fetchtasks/email', getUserTasks);
router.post('/add/tasks', createTask);

export default router;