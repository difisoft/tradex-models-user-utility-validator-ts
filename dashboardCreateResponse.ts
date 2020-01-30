
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const dashboardCreateResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/dashboardCreateResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "dashboardCreateResponse schema",
  "type": "object",
  "properties": {
    "dashboardId": {
      "description": "id of the just created dashboard",
      "type": "number"
    }
  }
};
let dashboardCreateResponseAjv = null;
export function dashboardCreateResponseValidator() {
  if (dashboardCreateResponseAjv == null) {
    dashboardCreateResponseAjv = new Ajv({validateSchema: false}).compile(dashboardCreateResponseSchema);
  }
  return dashboardCreateResponseAjv;
}
      