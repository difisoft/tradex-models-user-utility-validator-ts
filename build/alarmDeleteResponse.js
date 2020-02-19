"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.alarmDeleteResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/alarmDeleteResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "alarmDeleteResponse schema",
    "type": "object"
};
let alarmDeleteResponseAjv = null;
function alarmDeleteResponseValidator() {
    if (alarmDeleteResponseAjv == null) {
        alarmDeleteResponseAjv = new Ajv({ validateSchema: false }).compile(exports.alarmDeleteResponseSchema);
    }
    return alarmDeleteResponseAjv;
}
exports.alarmDeleteResponseValidator = alarmDeleteResponseValidator;
//# sourceMappingURL=alarmDeleteResponse.js.map