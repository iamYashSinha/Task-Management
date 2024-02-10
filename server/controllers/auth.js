import jwt from 'jsonwebtoken';
import admin from 'firebase-admin';
import serviceAccount from '../serviceAccountKey.json' assert { type: "json" };
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://task-management-7a088-default-rtdb.firebaseio.com/'
});

export const login = async (req, res) => {
    const {email, password} = req.body;
    const userRef = admin.firestore().collection('users').doc(email);
    const doc = await userRef.get();
    if (!doc.exists) {
        res.status(400).json({message: 'User does not exist'});
    } else {
        const user = doc.data();
        if (user.password === password) {
            const token = jwt.sign({email, password}, 'secret', {expiresIn: '1h'});
            res.status(200).json({message: 'Login successful', token});
        } else {
            res.status(400).json({message: 'Invalid credentials'});
        }
    }
};

//register route
export const register = async (req, res) => {
    const {email, password, name} = req.body;
    const data = {email, password, name};
    const userRef = admin.firestore().collection('users').doc(email);
    const doc = await userRef.get();
    if (!doc.exists) {
        await admin.firestore().collection('users').doc(email).set(data);
        res.status(201).json({message: 'User added successfully'});
    } else {
        res.status(400).json({message: 'User already exists'});
    }
};