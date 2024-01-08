"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiFailureMessage = exports.apiSuccessMessage = exports.genericConstants = exports.stringConstants = exports.httpConstants = void 0;
exports.httpConstants = {
    METHOD_TYPE: {
        POST: "POST",
        GET: "GET",
        PUT: "PUT",
    },
    HEADER_TYPE: {
        URL_ENCODED: "application/x-www-form-urlencoded",
        APPLICATION_JSON: "application/json",
    },
    HEADER_KEYS: {
        DEVICE_TYPE: "device-type",
        DEVICE_ID: "device-id",
        SESSION_TOKEN: "session-token",
        PUSH_TOKEN: "push-token",
    },
    DEVICE_TYPE: {
        ANDROID: "android",
        IOS: "ios",
        WEB: "web",
    },
    CONTENT_TYPE: {
        URL_ENCODE: "application/x-www-form-urlencoded",
    },
    WEBSERVICE_PATH: {
        SYNC_ATTENDANCE: "sync-attendance/",
    },
    RESPONSE_STATUS: {
        SUCCESS: true,
        FAILURE: false,
    },
    RESPONSE_CODES: {
        UNAUTHORIZED: 401,
        SERVER_ERROR: 500,
        NOT_FOUND: 404,
        OK: 200,
        NO_CONTENT_FOUND: 204,
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        GONE: 410,
        UNSUPPORTED_MEDIA_TYPE: 415,
        TOO_MANY_REQUEST: 429,
        INVALID_PARAMS: 400,
        ALREADY_EXIST: 409,
    },
    LOG_LEVEL_TYPE: {
        INFO: "info",
        ERROR: "error",
        WARN: "warn",
        VERBOSE: "verbose",
        DEBUG: "debug",
        SILLY: "silly",
        FUNCTIONAL: "functional",
        HTTP_REQUEST: "http request",
    },
};
exports.stringConstants = {
    SERVICE_STATUS_HTML: '<body style="font-family: Helvetica !important; background-color: black">' +
        '<div style="display: flex; flex:1; height: 100% ; justify-content: center; align-items: center; min-height: 100vh !important; font-size: 24px !important; color: #605DFF !important;">' +
        "⚡ Template 🔋 MicroService is working fine</div></body>",
};
exports.genericConstants = {
    DEVICE_TYPE: {},
};
exports.apiSuccessMessage = {
    FETCH_SUCCESS: "Information fetched successfully",
    ADD_SUCCESS: "Information added successfully",
    UPDATED_RECORD: "Record updated successfully",
};
exports.apiFailureMessage = {
    INVALID_PARAMS: "Invalid Parameters",
    INVALID_REQUEST: "Invalid Request",
    INVALID_SESSION_TOKEN: "Invalid session token",
    INTERNAL_SERVER_ERROR: "Internal server Error",
    BAD_REQUEST: "Bad Request!",
};
