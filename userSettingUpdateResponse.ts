
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const userSettingUpdateResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/userSettingUpdateResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "userSettingUpdateResponse",
  "type": "object"
};
let userSettingUpdateResponseAjv = null;
export function userSettingUpdateResponseValidator() {
  if (userSettingUpdateResponseAjv == null) {
    userSettingUpdateResponseAjv = new Ajv({validateSchema: false}).compile(userSettingUpdateResponseSchema);
  }
  return userSettingUpdateResponseAjv;
}
      