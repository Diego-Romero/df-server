import express from 'express';

import config from './config';

console.log(`CONFIG: `, config)

console.log(`ENV: ${process.env.NODE_ENV}`)

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.status(200).send("hello from server 2");
});

app.listen(port, () => {
    return console.log(`server is listening on port: ${port}`)
})