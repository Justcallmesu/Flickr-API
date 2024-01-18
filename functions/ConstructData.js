const axios = require("axios").default;

// Class
const ServerResponse = require("../class/ServerResponse.js");
const ServerError = require("../class/ServerError.js");

// Functions
const ConstructURL = require("./ConstructURL.js");
const ConstructImageUrl = require("./ConstructImageURL.js");

async function constructData(tags, page = 1, itemsPerPage = 10, id) {
    console.log(id);
    const { data } = await axios.get(ConstructURL(tags, page, itemsPerPage, id, "photos"));
    if (!id) { // If There is No ID Query Run This Conditional
        const { photos: { page: CurrentPage, pages, perpage, total, photo } } = data;

        const transformedPhotos = await Promise.all(photo.map(async (e) => {
            const photoData = e;

            const { data: { profile } } = await axios.get(ConstructURL(0, 0, 0, e.owner, "user"));
            photoData.owner = profile;
            photoData.url = ConstructImageUrl(photoData.server, photoData.id, photoData.secret)
            return photoData;
        }));

        return new ServerResponse(200, "Data Fetched", { CurrentPage, pages, perpage, total, photos: transformedPhotos });
    }

    // Construct Single Data Section

    if (data?.code === 1) { // Code 1 === No Photo Found
        return new ServerError(404, "Photo Not Found");
    }

    const photoData = data.photo;
    photoData.url = ConstructImageUrl(photoData.server, photoData.id, photoData.secret);
    return new ServerResponse(200, "Data Fetched", photoData);
}

module.exports = constructData;