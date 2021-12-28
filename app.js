const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//ROUTES

app.get("/", function(req, res) {
    res.send("We are on home");
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("Connected to DB!");
})

//How do we start listening to the server

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})