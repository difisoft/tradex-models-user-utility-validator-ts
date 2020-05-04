
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const dashboardSharedCodeResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/dashboardSharedCodeResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "dashboardSharedCodeResponse schema",
  "type": "object",
  "properties": {
    "sharedCode": {
      "description": "shared code",
      "type": "string"
    }
  }
};
let dashboardSharedCodeResponseAjv = null;
export function dashboardSharedCodeResponseValidator() {
  if (dashboardSharedCodeResponseAjv == null) {
    dashboardSharedCodeResponseAjv = new Ajv({validateSchema: false}).compile(dashboardSharedCodeResponseSchema);
  }
  return dashboardSharedCodeResponseAjv;
}
      