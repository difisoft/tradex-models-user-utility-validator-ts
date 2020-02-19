"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.notificationMarkResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/notificationMarkResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "notificationMarkResponse",
    "type": "object"
};
let notificationMarkResponseAjv = null;
function notificationMarkResponseValidator() {
    if (notificationMarkResponseAjv == null) {
        notificationMarkResponseAjv = new Ajv({ validateSchema: false }).compile(exports.notificationMarkResponseSchema);
    }
    return notificationMarkResponseAjv;
}
exports.notificationMarkResponseValidator = notificationMarkResponseValidator;
//# sourceMappingURL=notificationMarkResponse.js.map