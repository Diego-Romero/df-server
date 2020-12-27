import express, { Request, Response } from 'express';
import config from './config';
import './db-connection';

const app = express();
const port = config.port || 8080;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Deepflow health check');
});

app.listen(port, () => console.log(`server is listening on port: ${port}`));
