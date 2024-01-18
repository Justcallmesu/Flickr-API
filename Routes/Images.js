const express = require('express');

// App Router ("Images")
const Router = express.Router();

// Handler
const { getImages, getImage } = require("../Resources/Images.js")

// Routes
Router.route("/").get(getImages);
Router.route("/:id").get(getImage);

module.exports = Router