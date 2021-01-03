import express, { Request, Response } from 'express';
import config from './config/config';
import './config/db-connection';
import { setMiddleWare } from './config/middleware';

const app = express();
const port = config.port || 8080;

setMiddleWare(app);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Deepflow health check');
});

app.listen(port, () => console.log(`server is listening on port: ${port}`));
