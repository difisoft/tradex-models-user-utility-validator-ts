
/*
* This file is automatic generated
*/
import * as Ajv from 'ajv';
export const alarmAddResponseSchema = {
  "id": "http://tradex.techx.vn/user-utility/alarmAddResponse",
  "$schema": "http://json-schema.org/draft-07/schema#",
  "description": "alarmAddResponse schema",
  "type": "object",
  "required": [
    "code",
    "value",
    "currentValue",
    "type",
    "option",
    "notificationMethod"
  ],
  "properties": {
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
let alarmAddResponseAjv = null;
export function alarmAddResponseValidator() {
  if (alarmAddResponseAjv == null) {
    alarmAddResponseAjv = new Ajv({validateSchema: false}).compile(alarmAddResponseSchema);
  }
  return alarmAddResponseAjv;
}
      