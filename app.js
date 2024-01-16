const express = require("express");
const cors = require("cors");

//! App Initialization
const app = express();

app.use(cors({
    origin: "*",
}))


//! Routes

//! Routing
app.get("/", (req, res) => { //* Root Routing to Check Server Status
    res.status(200).json({
        status: 200,
        message: "Server is Running"
    })
});

app.use();

//! Export app instance
module.exports = app