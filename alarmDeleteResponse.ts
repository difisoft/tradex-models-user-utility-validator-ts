
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const alarmDeleteResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/alarmDeleteResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "alarmDeleteResponse schema",
  "type": "object"
};
let alarmDeleteResponseAjv = null;
export function alarmDeleteResponseValidator() {
  if (alarmDeleteResponseAjv == null) {
    alarmDeleteResponseAjv = new Ajv({validateSchema: false}).compile(alarmDeleteResponseSchema);
  }
  return alarmDeleteResponseAjv;
}
      