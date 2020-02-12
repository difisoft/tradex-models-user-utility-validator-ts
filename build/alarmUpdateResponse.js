"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ajv = require("ajv");
exports.alarmUpdateResponseSchema = {
    "id": "http://tradex.techx.vn/user-utility/alarmUpdateResponse",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "alarmUpdateResponse schema",
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
            "description": "id of alarm",
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
let alarmUpdateResponseAjv = null;
function alarmUpdateResponseValidator() {
    if (alarmUpdateResponseAjv == null) {
        alarmUpdateResponseAjv = new Ajv({ validateSchema: false }).compile(exports.alarmUpdateResponseSchema);
    }
    return alarmUpdateResponseAjv;
}
exports.alarmUpdateResponseValidator = alarmUpdateResponseValidator;
//# sourceMappingURL=alarmUpdateResponse.js.map