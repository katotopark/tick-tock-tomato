import express, { Application } from 'express';
import dotenv from 'dotenv';
import { userRouter, projectRouter } from './routes/index';

dotenv.config();

const app: Application = express();
const port: string | number = process.env.PORT || 5000;

app.use('/api/v1/users', userRouter);
app.use('/api/v1/projects', projectRouter);

app.listen(port, () => console.log(`Server is running at PORT ${port}!`));
