"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSettingUpdateResponseValidator = exports.userSettingUpdateResponseSchema = void 0;
const Ajv = require("ajv");
exports.userSettingUpdateResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/userSettingUpdateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "userSettingUpdateResponse",
    "type": "object"
};
let userSettingUpdateResponseAjv = null;
function userSettingUpdateResponseValidator() {
    if (userSettingUpdateResponseAjv == null) {
        userSettingUpdateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.userSettingUpdateResponseSchema);
    }
    return userSettingUpdateResponseAjv;
}
exports.userSettingUpdateResponseValidator = userSettingUpdateResponseValidator;
//# sourceMappingURL=userSettingUpdateResponse.js.map