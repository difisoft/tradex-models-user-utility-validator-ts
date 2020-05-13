"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardUpdateResponseValidator = exports.dashboardUpdateResponseSchema = void 0;
const Ajv = require("ajv");
exports.dashboardUpdateResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/dashboardUpdateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dashboardUpdateResponse",
    "type": "object"
};
let dashboardUpdateResponseAjv = null;
function dashboardUpdateResponseValidator() {
    if (dashboardUpdateResponseAjv == null) {
        dashboardUpdateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dashboardUpdateResponseSchema);
    }
    return dashboardUpdateResponseAjv;
}
exports.dashboardUpdateResponseValidator = dashboardUpdateResponseValidator;
//# sourceMappingURL=dashboardUpdateResponse.js.map