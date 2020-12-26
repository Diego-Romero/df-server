import express from 'express';
import config from './config';

const app = express()
const port = config.port || 8080

app.get('/', (req, res) => {
    res.status(200).send("hello from server ");
});

app.listen(port, () => {
    return console.log(`server is listening on port: ${port}`)
})