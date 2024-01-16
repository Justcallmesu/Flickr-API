class ServerResponse {
    constructor(statusCode, message, body) {
        this.statusCode = statusCode;
        this.message = message;
        this.body = body
    };
};

module.exports = ServerResponse