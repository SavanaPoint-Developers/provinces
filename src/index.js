import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { router } from './routes/routes.js';

import { connection } from './db/mongoose.js';

connection()


const app = express();
app.use(express.json())
app.use(morgan('dev'));
app.use(cors());
app.use('/api', router)
const port = process.env.PORT || 4200;


app.listen(port, () =>
{
    console.log(`your server is running on http://localhost:${ port }`)
});