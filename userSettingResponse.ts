
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const userSettingResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/userSettingResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "userSettingResponse schema",
  "type": "object"
};
let userSettingResponseAjv = null;
export function userSettingResponseValidator() {
  if (userSettingResponseAjv == null) {
    userSettingResponseAjv = new Ajv({validateSchema: false}).compile(userSettingResponseSchema);
  }
  return userSettingResponseAjv;
}
      