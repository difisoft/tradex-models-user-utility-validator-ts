"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteListUpdateResponseValidator = exports.favoriteListUpdateResponseSchema = void 0;
const Ajv = require("ajv");
exports.favoriteListUpdateResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/favoriteListUpdateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "This is a response of updating favoriteList request",
    "type": "object"
};
let favoriteListUpdateResponseAjv = null;
function favoriteListUpdateResponseValidator() {
    if (favoriteListUpdateResponseAjv == null) {
        favoriteListUpdateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.favoriteListUpdateResponseSchema);
    }
    return favoriteListUpdateResponseAjv;
}
exports.favoriteListUpdateResponseValidator = favoriteListUpdateResponseValidator;
//# sourceMappingURL=favoriteListUpdateResponse.js.map