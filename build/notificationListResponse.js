"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationListResponseValidator = exports.notificationListResponseSchema = void 0;
const Ajv = require("ajv");
exports.notificationListResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/notificationListResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "notificationListResponse schema",
    "type": "object",
    "properties": {
        "id": {
            "description": "notification id",
            "type": "number"
        },
        "type": {
            "description": "type",
            "type": "string"
        },
        "method": {
            "description": "method",
            "type": "string"
        },
        "username": {
            "description": "username",
            "type": "string"
        },
        "accountNumber": {
            "description": "account Number",
            "type": "string"
        },
        "subNumber": {
            "description": "sub Number",
            "type": "string"
        },
        "channel": {
            "description": "channel",
            "type": "string"
        },
        "payload": {
            "description": "payload",
            "type": "object"
        },
        "configuration": {
            "description": "configuration",
            "type": "object"
        },
        "status": {
            "description": "status, READ or UNREAD",
            "type": "string",
            "enum": [
                "READ",
                "UNREAD"
            ]
        }
    }
};
let notificationListResponseAjv = null;
function notificationListResponseValidator() {
    if (notificationListResponseAjv == null) {
        notificationListResponseAjv = new Ajv({ validateSchema: false }).compile(exports.notificationListResponseSchema);
    }
    return notificationListResponseAjv;
}
exports.notificationListResponseValidator = notificationListResponseValidator;
//# sourceMappingURL=notificationListResponse.js.map