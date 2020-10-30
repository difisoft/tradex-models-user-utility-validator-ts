"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteListGetResponseValidator = exports.favoriteListGetResponseSchema = void 0;
const Ajv = require("ajv");
exports.favoriteListGetResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/favoriteListGetResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "This is a response of get favorite list by an user",
    "type": "object",
    "properties": {
        "id": {
            "description": "id of the favorite list",
            "type": "number",
            "minimum": 0
        },
        "name": {
            "type": "string",
            "description": "name of the favorite list"
        },
        "order": {
            "type": "number",
            "description": "order of the favorite list"
        },
        "count": {
            "type": "number",
            "description": "number of code in the favorite list"
        },
        "maxCount": {
            "type": "integer",
            "minimum": 0,
            "description": "maximum number of code allowed in a favorite list"
        },
        "itemList": {
            "type": "array",
            "description": "list of code in that favorite list",
            "items": {
                "type": "object",
                "properties": {
                    "isNote": {
                        "type": "boolean",
                        "description": "is Note or not. If not a note, count as stock"
                    },
                    "data": {
                        "type": "string",
                        "description": "code, exp: VIC"
                    }
                }
            },
            "additionalItems": false
        }
    }
};
let favoriteListGetResponseAjv = null;
function favoriteListGetResponseValidator() {
    if (favoriteListGetResponseAjv == null) {
        favoriteListGetResponseAjv = new Ajv({ validateSchema: false }).compile(exports.favoriteListGetResponseSchema);
    }
    return favoriteListGetResponseAjv;
}
exports.favoriteListGetResponseValidator = favoriteListGetResponseValidator;
//# sourceMappingURL=favoriteListGetResponse.js.map