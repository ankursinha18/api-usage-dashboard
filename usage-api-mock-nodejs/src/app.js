// Declaring dependencies
const express = require('express');
const bodyParser = require('body-parser'); 

// Defining the express App
const app = express();
app.set('port', ( process.env.PORT || 5000));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Call Usage API Routes
app.use('/', require('./routes/usage-api'));


// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server is listening on on port:', app.get('port'));
});
