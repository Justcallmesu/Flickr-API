module.exports = function (serverId, id, secret) {
    return `https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
}