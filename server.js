const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const path = require('path');
const pageRoute = require('./routes/pageRoute');


//environment variables
dotenv.config();
const PORT = process.env.PORT || 4000;


//express init
const app = express();

//data manage
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Ejs init
app.set("view engine", "ejs")

//static folder
app.use(express.static('public'));


//routes
app.use(pageRoute);



//server listen
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`.bgGreen.black);
});