"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardListResponseValidator = exports.dashboardListResponseSchema = void 0;
const Ajv = require("ajv");
exports.dashboardListResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/dashboardListResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dashboardListResponse schema",
    "type": "object",
    "properties": {
        "dashboardId": {
            "description": "dash board id",
            "type": "number"
        },
        "data": {
            "description": "the json file that front-end use to store setting",
            "type": "object"
        }
    }
};
let dashboardListResponseAjv = null;
function dashboardListResponseValidator() {
    if (dashboardListResponseAjv == null) {
        dashboardListResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dashboardListResponseSchema);
    }
    return dashboardListResponseAjv;
}
exports.dashboardListResponseValidator = dashboardListResponseValidator;
//# sourceMappingURL=dashboardListResponse.js.map