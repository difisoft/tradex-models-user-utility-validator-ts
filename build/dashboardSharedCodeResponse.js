"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardSharedCodeResponseValidator = exports.dashboardSharedCodeResponseSchema = void 0;
const Ajv = require("ajv");
exports.dashboardSharedCodeResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/dashboardSharedCodeResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dashboardSharedCodeResponse schema",
    "type": "object",
    "properties": {
        "sharedCode": {
            "description": "shared code",
            "type": "string"
        }
    }
};
let dashboardSharedCodeResponseAjv = null;
function dashboardSharedCodeResponseValidator() {
    if (dashboardSharedCodeResponseAjv == null) {
        dashboardSharedCodeResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dashboardSharedCodeResponseSchema);
    }
    return dashboardSharedCodeResponseAjv;
}
exports.dashboardSharedCodeResponseValidator = dashboardSharedCodeResponseValidator;
//# sourceMappingURL=dashboardSharedCodeResponse.js.map