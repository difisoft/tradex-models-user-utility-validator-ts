"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.notificationUnreadTotalResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/notificationUnreadTotalRequest",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "notificationUnreadTotalRequest schema",
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