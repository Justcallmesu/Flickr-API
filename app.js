const express = require("express");
const cors = require("cors");

// App Initialization
const app = express();

app.use(cors({
    origin: "*",
}))


// Routes

// Routing
app.use();

// Export app instance
module.exports = app