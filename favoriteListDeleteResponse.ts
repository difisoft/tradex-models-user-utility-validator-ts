
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const favoriteListDeleteResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/favoriteListDeleteResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "favoriteListDeleteResponse schema",
  "type": "object"
};
let favoriteListDeleteResponseAjv = null;
export function favoriteListDeleteResponseValidator() {
  if (favoriteListDeleteResponseAjv == null) {
    favoriteListDeleteResponseAjv = new Ajv({validateSchema: false}).compile(favoriteListDeleteResponseSchema);
  }
  return favoriteListDeleteResponseAjv;
}
      