
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const favoriteListUpdateResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/favoriteListUpdateResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "This is a response of updating favoriteList request",
  "type": "object"
};
let favoriteListUpdateResponseAjv = null;
export function favoriteListUpdateResponseValidator() {
  if (favoriteListUpdateResponseAjv == null) {
    favoriteListUpdateResponseAjv = new Ajv({validateSchema: false}).compile(favoriteListUpdateResponseSchema);
  }
  return favoriteListUpdateResponseAjv;
}
      