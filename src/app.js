import express from 'express';
const app = express();
import router from './routes.js';
import cors from 'cors';
app.use(cors());
app.use(express.json());
app.use('/api', router);
app.get('/', (req, res) => {
    res.send('Hello World!');
});



export default app;



