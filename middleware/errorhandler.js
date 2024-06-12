const { constant } = require('../constant')

const errorHandler = (error, req, resp, next) => {
    const statusCode = resp.statusCode ? resp.statusCode : 500;

    switch (statusCode) {
        case constant.VALIDATION_ERROR:
            resp.json({
                "title": "Validation failed",
                message: err.message,
                stackTrace: error.stack
            });
            break;

        case constant.NOT_FOUND:
            resp.json({
                "title": "Not Found",
                message: err.message,
                stackTrace: error.stack
            });

        case constant.UNAUTHORIZED:
            resp.json({
                "title": "Unauthorized",
                message: err.message,
                stackTrace: error.stack
            });

        case constant.FORBIDDEN:
            resp.json({
                "title": "Forbidden ",
                message: err.message,
                stackTrace: error.stack
            });

        case constant.SERVER_ERROR:
            resp.json({
                "title": "Server Error ",
                message: err.message,
                stackTrace: error.stack
            });
        default:
            console.log("All good");
            break;
    }




}

module.exports = errorHandler