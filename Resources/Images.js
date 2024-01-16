const axios = require("axios").default;

// Class
const ServerResponse = require("../class/ServerResponse.js");

async function getImages(req, res, next) {

    res.status(200).json(new ServerResponse(200, "Data Successfully Fetched", transformedData))
}

module.exports = { getImages };
