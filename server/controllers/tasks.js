
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