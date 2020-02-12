
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const notificationUnreadTotalResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/notificationUnreadTotalRequest",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "notificationUnreadTotalRequest schema",
  "type": "object",
  "properties": {
    "totalUnread": {
      "description": "total remaining unread notification",
      "type": "number"
    }
  }
};
let notificationUnreadTotalResponseAjv = null;
export function notificationUnreadTotalResponseValidator() {
  if (notificationUnreadTotalResponseAjv == null) {
    notificationUnreadTotalResponseAjv = new Ajv({validateSchema: false}).compile(notificationUnreadTotalResponseSchema);
  }
  return notificationUnreadTotalResponseAjv;
}
      