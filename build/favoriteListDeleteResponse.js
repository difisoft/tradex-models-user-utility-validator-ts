"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteListDeleteResponseValidator = exports.favoriteListDeleteResponseSchema = void 0;
const Ajv = require("ajv");
exports.favoriteListDeleteResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/favoriteListDeleteResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "favoriteListDeleteResponse schema",
    "type": "object"
};
let favoriteListDeleteResponseAjv = null;
function favoriteListDeleteResponseValidator() {
    if (favoriteListDeleteResponseAjv == null) {
        favoriteListDeleteResponseAjv = new Ajv({ validateSchema: false }).compile(exports.favoriteListDeleteResponseSchema);
    }
    return favoriteListDeleteResponseAjv;
}
exports.favoriteListDeleteResponseValidator = favoriteListDeleteResponseValidator;
//# sourceMappingURL=favoriteListDeleteResponse.js.map