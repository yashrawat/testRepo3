const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const expenseRoutes = require('./routes/expense-routes');

//db connection
mongoose.connect('mongodb://localhost:27017/testRepo3DB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`App listening at http://localhost:${port}`);
        });
        console.log('Connected to database.');
    })
    .catch((error) => {
        console.log(`Connection failed. ${error}`)
    });

// parse application/json
app.use(bodyParser.json());

// parse application x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// CORS implementation
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    next();
});

//routes
app.use('/api', expenseRoutes);
