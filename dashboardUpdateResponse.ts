
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const dashboardUpdateResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/dashboardUpdateResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "dashboardUpdateResponse",
  "type": "object"
};
let dashboardUpdateResponseAjv = null;
export function dashboardUpdateResponseValidator() {
  if (dashboardUpdateResponseAjv == null) {
    dashboardUpdateResponseAjv = new Ajv({validateSchema: false}).compile(dashboardUpdateResponseSchema);
  }
  return dashboardUpdateResponseAjv;
}
      