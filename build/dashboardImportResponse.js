"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardImportResponseValidator = exports.dashboardImportResponseSchema = void 0;
const Ajv = require("ajv");
exports.dashboardImportResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/dashboardImportResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "dashboardImportResponse schema",
    "type": "object",
    "properties": {
        "data": {
            "description": "json data of dashboard",
            "type": "object"
        },
        "name": {
            "description": "dashboard name",
            "type": "string"
        },
        "sharingUser": {
            "description": "sharing user name",
            "type": "string"
        }
    }
};
let dashboardImportResponseAjv = null;
function dashboardImportResponseValidator() {
    if (dashboardImportResponseAjv == null) {
        dashboardImportResponseAjv = new Ajv({ validateSchema: false }).compile(exports.dashboardImportResponseSchema);
    }
    return dashboardImportResponseAjv;
}
exports.dashboardImportResponseValidator = dashboardImportResponseValidator;
//# sourceMappingURL=dashboardImportResponse.js.map