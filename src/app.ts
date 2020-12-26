import express, { application } from 'express';

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.status(200).send("hola from server");
});

app.listen(port, () => {
    return console.log(`server is listening on port: ${port}`)
})