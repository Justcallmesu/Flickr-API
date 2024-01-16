const express = require('express');

// App Router ("Images")
const Router = express.Router();

// Handler
const { getImages } = require("../Resources/Images.js")

// Routes
Router.route("/").get(getImages);

module.exports = Router