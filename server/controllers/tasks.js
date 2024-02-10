
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

//delete based on task email id passing email to the url http://localhost:5001/tasks/delete/tasks/p@gmail.com
export const deleteTask = async (req, res) => {
    const id = req.params.id;
    try {
        //use snapshot to get the task id
        const snapshot = await admin.firestore().collection('tasks').where('email', '==', id).get();
        snapshot.forEach(doc => {
            doc.ref.delete();
        });
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error });
    }
}

//update task based on task id where email = user email
export const updateTask = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    try {
        const snapshot = await admin.firestore().collection('tasks').where('email', '==', id).get();
        snapshot.forEach(doc => {
            doc.ref.update({ title, description });
        });
        res.status(200).json({ message: 'Task updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error });
    }
}
