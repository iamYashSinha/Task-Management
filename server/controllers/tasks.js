
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

//fetch task where email = user email
export const getUserTasks = async (req, res) => {
    const email = req.body.email;
    const tasks = [];
    const snapshot = await admin.firestore().collection('tasks').where('email', '==', email).get();
    snapshot.forEach(doc => {
        tasks.push(doc.data());
    });
    res.status(200).json(tasks);
};

// POST /tasks: Create a new task.
export const createTask = async (req, res) => {
    try {
        const {title, description, email} = req.body;
        const task = {
            title,
            description,
            createdAt: new Date().toISOString(),
            email
        };
        const newTask = await admin.firestore().collection('tasks').add(task);
        res.status(201).json({ id: newTask.id });
    } catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
    }
}
