import express from 'express';

import { getTasks, createTask, getUserTasks, deleteTask, updateTask } from '../controllers/tasks.js';

const router = express.Router();

router.get('/users/tasks', getTasks);
router.post('/fetchtasks/email', getUserTasks);
router.post('/add/tasks', createTask);
router.delete('/delete/tasks/:id', deleteTask);
router.put('/update/task/:id', updateTask);

export default router;