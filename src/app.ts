import express, { Request, Response } from 'express';
import config from './config/config';
import './loaders/db';
import './loaders/passport';
import { setMiddleWare } from './loaders/middleware';
import userRouter from './api/user/userController';

const app = express();
const port = config.port || 8080;

setMiddleWare(app);

// health check
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'health check confirmed' })
});

// routes
app.use('/user', userRouter);

app.listen(port, () => console.log(`server is listening on port: ${port}`));
