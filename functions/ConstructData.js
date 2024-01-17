const axios = require("axios").default;

// Class
const ServerResponse = require("../class/ServerResponse.js");
const ServerError = require("../class/ServerError.js");

// Functions
const jsonFlickrFeed = require("./jsonFlickrFeed.js"); // DO NOT DELETE! THIS FUNCTION IS TO HANDLE JSONP

async function constructURL(tags, pages = 1, itemsPerPage = 5) {
    const { data } = await axios.get(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tags}`, {})
    const { items } = eval(data);

    if (pages * itemsPerPage > items.length) {
        return new ServerError(400, "Data is Out of Bound");
    }

    const page = parseInt(pages);
    const paginated = items.slice((page - 1) * itemsPerPage, itemsPerPage * page);

    return new ServerResponse(200, "Data Fetched", { total: items.length, page, length: paginated.length, items: paginated });
}

module.exports = constructURL;