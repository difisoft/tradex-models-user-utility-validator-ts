"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notificationUnreadTotalResponseValidator = exports.notificationUnreadTotalResponseSchema = void 0;
const Ajv = require("ajv");
exports.notificationUnreadTotalResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/notificationUnreadTotalResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "notificationUnreadTotalResponse schema",
    "type": "object",
    "properties": {
        "totalUnread": {
            "description": "total remaining unread notification",
            "type": "number"
        }
    }
};
let notificationUnreadTotalResponseAjv = null;
function notificationUnreadTotalResponseValidator() {
    if (notificationUnreadTotalResponseAjv == null) {
        notificationUnreadTotalResponseAjv = new Ajv({ validateSchema: false }).compile(exports.notificationUnreadTotalResponseSchema);
    }
    return notificationUnreadTotalResponseAjv;
}
exports.notificationUnreadTotalResponseValidator = notificationUnreadTotalResponseValidator;
//# sourceMappingURL=notificationUnreadTotalResponse.js.map