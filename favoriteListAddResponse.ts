
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const favoriteListAddResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/favoriteListAddResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "favoriteListAddResponse schema",
  "type": "object",
  "required": [],
  "properties": {
    "id": {
      "description": "id of the favorite list",
      "type": "integer"
    },
    "name": {
      "description": "name of the favorite list",
      "type": "string"
    },
    "order": {
      "description": "order of the favorite list",
      "type": "number"
    },
    "count": {
      "description": "number of code in the favorite list",
      "type": "integer"
    },
    "maxCount": {
      "description": "maximum number of code allowed in a favorite list",
      "type": "integer"
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
      }
    }
  }
};
let favoriteListAddResponseAjv = null;
export function favoriteListAddResponseValidator() {
  if (favoriteListAddResponseAjv == null) {
    favoriteListAddResponseAjv = new Ajv({validateSchema: false}).compile(favoriteListAddResponseSchema);
  }
  return favoriteListAddResponseAjv;
}
      