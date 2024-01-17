function ConstructURL(tags, pages, itemsperpage, id, type = "photos") {
    try {
        if (type === "photos") {
            if (tags) {
                return `${process.env.flickr_api_url.replace("{method}", "flickr.photos.search").replace("{apikey}", process.env.flickr_app_public_key)}&tags=${tags}&page=${pages}&per_page=${itemsperpage}`;
            }

            if (id) {
                return `${process.env.flickr_api_url.replace("{method}", "flickr.photos.getInfo").replace("{apikey}", process.env.flickr_app_public_key)}&photo_id=${id}`;
            }

            return `${process.env.flickr_api_url.replace("{method}", "flickr.photos.getRecent").replace("{apikey}", process.env.flickr_app_public_key)}&page=${pages}&per_page=${itemsperpage}`;
        }

        return `${process.env.flickr_api_url.replace("{method}", "flickr.profile.getProfile").replace("{apikey}", process.env.flickr_app_public_key)}&user_id=${id}`;
    } catch (error) {
        console.error("Error While Fetching Flickr Data (ConstructURL.js):", error);
        process.exit(1);
    }
}

module.exports = ConstructURL;