
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const dashboardDetailResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/dashboardDetailResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "dashboardDetailResponse schema",
  "type": "object"
};
let dashboardDetailResponseAjv = null;
export function dashboardDetailResponseValidator() {
  if (dashboardDetailResponseAjv == null) {
    dashboardDetailResponseAjv = new Ajv({validateSchema: false}).compile(dashboardDetailResponseSchema);
  }
  return dashboardDetailResponseAjv;
}
      