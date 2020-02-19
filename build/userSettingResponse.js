"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.userSettingResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/userSettingResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "userSettingResponse schema",
    "type": "object"
};
let userSettingResponseAjv = null;
function userSettingResponseValidator() {
    if (userSettingResponseAjv == null) {
        userSettingResponseAjv = new Ajv({ validateSchema: false }).compile(exports.userSettingResponseSchema);
    }
    return userSettingResponseAjv;
}
exports.userSettingResponseValidator = userSettingResponseValidator;
//# sourceMappingURL=userSettingResponse.js.map