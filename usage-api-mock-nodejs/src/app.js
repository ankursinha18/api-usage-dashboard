// Declaring dependencies
const express = require('express');
const bodyParser = require('body-parser'); 

// Defining the express App
const app = express();
const port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Call Usage API Routes
app.use('/', require('./routes/usage-api'));


// Starting the server
app.listen(port, () => {
    console.log('Server is listening on on port:', port);
});
