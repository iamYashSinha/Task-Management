import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


const PORT = 5001 || process.env.PORT;


app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});


//server port and start
app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
})

