import express from 'express';

import { getTasks } from '../controllers/tasks.js';

const router = express.Router();

router.get('/user-tasks', getTasks);

export default router;