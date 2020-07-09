const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//set up express

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

console.log("Starting server...")
app.listen(port, () => { console.log(`Server started on port: ${port}`) });

//set up mongoose

console.log("Connecting to MongoDB...")
mongoose.connect(process.env.MONGODB_URI,
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) return console.error(err);
        console.log("MongoDB connection established");
    });