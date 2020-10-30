
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const dashboardDeleteResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/dashboardDeleteResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "dashboardDeleteResponse",
  "type": "object"
};
let dashboardDeleteResponseAjv = null;
export function dashboardDeleteResponseValidator() {
  if (dashboardDeleteResponseAjv == null) {
    dashboardDeleteResponseAjv = new Ajv({validateSchema: false}).compile(dashboardDeleteResponseSchema);
  }
  return dashboardDeleteResponseAjv;
}
      