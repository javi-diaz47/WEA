const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const cors = require('cors');


const app = express();


//Importing routes
const usersRoutes = require('./routes/users');

//Settings
app.set('port', process.env.PORT || 3000);




//Middleware - they're just functions
app.use(cors());
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: 'cytonic',
    port: 3306,
    database: 'wea'
}, 'single'));

//routes

app.use(express.json());
app.use(express.json({
    type: ['application/json', 'text/plain']
  }));
app.use(express.urlencoded({extended: true}));

app.use('/', usersRoutes);


app.listen(3000,  () => {
    console.log('Server on port 3000');
});