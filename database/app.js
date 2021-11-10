const express = require('express');
const morgan = require('morgan');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Importing routes
const usersRoutes = require('./routes/users');


//Settings
app.set('port', process.env.PORT || 3000);


//Middleware - they're just functions
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'cytonic',
    port: 3306,
    database: 'wea'
}, 'single'));


//routes
app.use('/', usersRoutes);

//Static files
app.use(express.static(path.join(__dirname, )))


app.listen(3000,  () => {
    console.log('Server on port 3000');
});