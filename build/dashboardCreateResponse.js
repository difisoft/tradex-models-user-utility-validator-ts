"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.dashboardCreateResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/dashboardCreateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dashboardCreateResponse schema",
    "type": "object",
    "properties": {
        "dashboardId": {
            "description": "id of the just created dashboard",
            "type": "number"
        }
    }
};
let dashboardCreateResponseAjv = null;
function dashboardCreateResponseValidator() {
    if (dashboardCreateResponseAjv == null) {
        dashboardCreateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dashboardCreateResponseSchema);
    }
    return dashboardCreateResponseAjv;
}
exports.dashboardCreateResponseValidator = dashboardCreateResponseValidator;
//# sourceMappingURL=dashboardCreateResponse.js.map