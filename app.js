const express = require("express");
const cors = require("cors");
const morgan = require("morgan")

//! App Initialization
const app = express();

app.use(cors({
    origin: "*",
}));

if (process.env.NODE_ENV === "development") app.use(morgan("short"));

//! Routes
const Images = require("./Routes/Images.js")

//! Routing
app.get("/", (req, res) => { //* Root Routing to Check Server Status
    res.status(200).json({
        status: 200,
        message: "Server is Running"
    })
});

app.use("/images", Images);

//! Export app instance
module.exports = app