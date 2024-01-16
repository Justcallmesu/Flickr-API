class ServerResponse {
    constructor(statusCode, message) {
        this.statusCode = statusCode;
        this.status = String(this.statusCode).startsWith("4") ? "Client Error" : "Server Error";
        this.message = message;
    };
};

module.exports = ServerResponse