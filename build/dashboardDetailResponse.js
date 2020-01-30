"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.dashboardDetailResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/dashboardDetailResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dashboardDetailResponse schema",
    "type": "object"
};
let dashboardDetailResponseAjv = null;
function dashboardDetailResponseValidator() {
    if (dashboardDetailResponseAjv == null) {
        dashboardDetailResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dashboardDetailResponseSchema);
    }
    return dashboardDetailResponseAjv;
}
exports.dashboardDetailResponseValidator = dashboardDetailResponseValidator;
//# sourceMappingURL=dashboardDetailResponse.js.map