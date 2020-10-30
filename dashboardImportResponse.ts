
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const dashboardImportResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/dashboardImportResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "dashboardImportResponse schema",
  "type": "object",
  "properties": {
    "data": {
      "description": "json data of dashboard",
      "type": "object"
    },
    "name": {
      "description": "dashboard name",
      "type": "string"
    },
    "sharingUser": {
      "description": "sharing user name",
      "type": "string"
    }
  }
};
let dashboardImportResponseAjv = null;
export function dashboardImportResponseValidator() {
  if (dashboardImportResponseAjv == null) {
    dashboardImportResponseAjv = new Ajv({validateSchema: false}).compile(dashboardImportResponseSchema);
  }
  return dashboardImportResponseAjv;
}
      