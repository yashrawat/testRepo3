const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('Hello world');
});

app.post('/', (req, res, next) => {
    res.send('Got a POST request');
});

app.put('/user', (req, res, next) => {
    res.send('Got a put request at /user');
});

app.delete('/user', (req, res, next) => {
    res.send('Got a delete request at /user');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});