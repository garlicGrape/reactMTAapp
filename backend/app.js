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