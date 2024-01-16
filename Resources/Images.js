// Functions
const ConstructData = require("../functions/ConstructData.js");

async function getImages(req, res, next) {
    const { query: { tags, page, itemsPerPage } } = req
    res.status(200).json(await ConstructData(Array.isArray(tags) ? tags[0] : tags, page, itemsPerPage))
}

module.exports = { getImages };
