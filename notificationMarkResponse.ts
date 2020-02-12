
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const notificationMarkResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/notificationMarkResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "notificationMarkResponse",
  "type": "object"
};
let notificationMarkResponseAjv = null;
export function notificationMarkResponseValidator() {
  if (notificationMarkResponseAjv == null) {
    notificationMarkResponseAjv = new Ajv({validateSchema: false}).compile(notificationMarkResponseSchema);
  }
  return notificationMarkResponseAjv;
}
      