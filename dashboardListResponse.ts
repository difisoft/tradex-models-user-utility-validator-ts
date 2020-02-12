
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const dashboardListResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/dashboardListResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "dashboardListResponse schema",
  "type": "object",
  "properties": {
    "dashboardId": {
      "description": "dash board id",
      "type": "number"
    },
    "data": {
      "description": "the json file that front-end use to store setting",
      "type": "object"
    }
  }
};
let dashboardListResponseAjv = null;
export function dashboardListResponseValidator() {
  if (dashboardListResponseAjv == null) {
    dashboardListResponseAjv = new Ajv({validateSchema: false}).compile(dashboardListResponseSchema);
  }
  return dashboardListResponseAjv;
}
      