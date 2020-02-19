
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const alarmListResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/alarmListResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "alarmListResponse schema",
  "type": "object",
  "required": [
    "id",
    "code",
    "value",
    "currentValue",
    "type",
    "option",
    "notificationMethod"
  ],
  "properties": {
    "id": {
      "description": "id of the alarm",
      "type": "integer"
    },
    "code": {
      "description": "code of the alarm",
      "type": "string"
    },
    "value": {
      "description": "when the price equal to this value, the alarm will be trigger",
      "type": "number"
    },
    "currentValue": {
      "description": "current value of the code",
      "type": "number"
    },
    "type": {
      "description": "type of the code",
      "type": "string",
      "enum": [
        "STOCK",
        "INDEX",
        "FUTURES",
        "CW",
        "ETF",
        "FUND"
      ]
    },
    "option": {
      "description": "alarm once or multiple time",
      "type": "string",
      "enum": [
        "ONCE",
        "MULTIPLE"
      ]
    },
    "notificationMethod": {
      "description": "email, sms or push notification",
      "type": "string",
      "enum": [
        "PUSH_NOTIFICATION",
        "EMAIL",
        "SMS"
      ]
    }
  }
};
let alarmListResponseAjv = null;
export function alarmListResponseValidator() {
  if (alarmListResponseAjv == null) {
    alarmListResponseAjv = new Ajv({validateSchema: false}).compile(alarmListResponseSchema);
  }
  return alarmListResponseAjv;
}
      