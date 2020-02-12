
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const favoriteListGetResponseSchema = {
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
export function favoriteListGetResponseValidator() {
  if (favoriteListGetResponseAjv == null) {
    favoriteListGetResponseAjv = new Ajv({validateSchema: false}).compile(favoriteListGetResponseSchema);
  }
  return favoriteListGetResponseAjv;
}
      