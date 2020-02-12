"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.dashboardDeleteResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/dashboardDeleteResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dashboardDeleteResponse",
    "type": "object"
};
let dashboardDeleteResponseAjv = null;
function dashboardDeleteResponseValidator() {
    if (dashboardDeleteResponseAjv == null) {
        dashboardDeleteResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dashboardDeleteResponseSchema);
    }
    return dashboardDeleteResponseAjv;
}
exports.dashboardDeleteResponseValidator = dashboardDeleteResponseValidator;
//# sourceMappingURL=dashboardDeleteResponse.js.map