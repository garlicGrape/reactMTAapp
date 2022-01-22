const express = require("express");
const axios = require("axios");
const app = express(); //Instaniate an Express object (where the app gets created)
const fs = require("fs"); //Loads the file system 

require("dotenv").config({silent: true});
const mongoose = require("mongoose");
const db_url = process.env.MONGO_DB_URL;
mongoose.connect(db_url, () => {   //lambda function (anonymous function)
    console.log("DB connection state: " + mongoose.connection.readyState);
});
// route for HTTP GET requests to the root document (a URL)
app.get("/", (req, res) => {
    res.send('<img src="https://content.codecademy.com/courses/web-101/web101-image_brownbear.jpg" alt="A Brown Bear"/>');
});
// allow CORS, so React app on port 3000 can make requests to Express Server 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});



module.exports = app; //so the server can see the app