
import admin from 'firebase-admin';

export const getTasks = async (req, res) => {
    //fetch all tasks from firestore under tasks collection
    const tasks = [];
    const snapshot = await admin.firestore().collection('tasks').get();
    snapshot.forEach(doc => {
        tasks.push(doc.data());
    });
    res.status(200).json(tasks);
};

// GET /tasks/:id: Fetch a single task by ID.
export const getTaskById = async (req, res) => {
    const id = req.params.id;
    const task = await admin.firestore().collection('tasks').doc(id).get();
    if (!task.exists) {
        res.status(404).json({ message: `Task ${id} not found` });
    } else {
        res.status(200).json(task.data());
    }
};

// POST /tasks: Create a new task.
export const createTask = async (req, res) => {
    try {
        const {title, description} = req.body;
        const task = {
            title,
            description,
            createdAt: new Date().toISOString()
        };
        const newTask = await admin.firestore().collection('tasks').add(task);
        res.status(201).json({ id: newTask.id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
}
