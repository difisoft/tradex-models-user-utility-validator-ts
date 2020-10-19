"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.favoriteListUpdateRequestValidator = exports.favoriteListUpdateRequestSchema = void 0;
const Ajv = require("ajv");
exports.favoriteListUpdateRequestSchema = {
    "id": "http://tradex.techx.vn/user-utility/favoriteListUpdateRequest",
    "$schema": "http://json-schema.org/draft-07/schema#",
    "description": "This is a request to update favoriteList",
    "type": "object",
    "allOf": [
        {
            "id": "http://tradex.techx.vn/common/baseRequest",
            "$schema": "http://json-schema.org/draft-07/schema#",
            "description": "base request for all other",
            "type": "object",
            "properties": {
                "headers": {
                    "id": "http://tradex.techx.vn/common/requestHeader",
                    "$schema": "http://json-schema.org/draft-07/schema#",
                    "description": "header for each request",
                    "type": "object",
                    "properties": {
                        "token": {
                            "oneOf": [
                                {
                                    "type": "null"
                                },
                                {
                                    "id": "http://tradex.techx.vn/common/token",
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "description": "A geographical coordinate",
                                    "type": "object",
                                    "properties": {
                                        "domain": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "userId": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "serviceCode": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "connectionId": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "sessionId": {
                                            "description": "only use for vcsc rest",
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "serviceId": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "serviceName": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "clientId": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "serviceUserId": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "loginMethod": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "refreshTokenId": {
                                            "type": "number"
                                        },
                                        "scopeGroupIds": {
                                            "type": "array",
                                            "items": {
                                                "type": "number"
                                            }
                                        },
                                        "serviceUsername": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "userData": {
                                            "id": "http://tradex.techx.vn/common/userData",
                                            "$schema": "http://json-schema.org/draft-07/schema#",
                                            "description": "An user data in token",
                                            "type": "object",
                                            "properties": {
                                                "username": {
                                                    "type": "string"
                                                },
                                                "orderKeys": {
                                                    "type": [
                                                        "null",
                                                        "number"
                                                    ]
                                                },
                                                "identifierNumber": {
                                                    "type": "string"
                                                },
                                                "branchCode": {
                                                    "type": "string"
                                                },
                                                "mngDeptCode": {
                                                    "type": "string"
                                                },
                                                "deptCode": {
                                                    "type": "string"
                                                },
                                                "agencyNumber": {
                                                    "type": "string"
                                                },
                                                "accountNumbers": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "fssTokenId": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "secToken": {
                            "oneOf": [
                                {
                                    "type": "null"
                                },
                                {
                                    "id": "http://tradex.techx.vn/common/token",
                                    "$schema": "http://json-schema.org/draft-07/schema#",
                                    "description": "A geographical coordinate",
                                    "type": "object",
                                    "properties": {
                                        "domain": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "userId": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "serviceCode": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "connectionId": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "sessionId": {
                                            "description": "only use for vcsc rest",
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "serviceId": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "serviceName": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "clientId": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "serviceUserId": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "loginMethod": {
                                            "type": [
                                                "null",
                                                "number"
                                            ]
                                        },
                                        "refreshTokenId": {
                                            "type": "number"
                                        },
                                        "scopeGroupIds": {
                                            "type": "array",
                                            "items": {
                                                "type": "number"
                                            }
                                        },
                                        "serviceUsername": {
                                            "type": [
                                                "null",
                                                "string"
                                            ]
                                        },
                                        "userData": {
                                            "id": "http://tradex.techx.vn/common/userData",
                                            "$schema": "http://json-schema.org/draft-07/schema#",
                                            "description": "An user data in token",
                                            "type": "object",
                                            "properties": {
                                                "username": {
                                                    "type": "string"
                                                },
                                                "orderKeys": {
                                                    "type": [
                                                        "null",
                                                        "number"
                                                    ]
                                                },
                                                "identifierNumber": {
                                                    "type": "string"
                                                },
                                                "branchCode": {
                                                    "type": "string"
                                                },
                                                "mngDeptCode": {
                                                    "type": "string"
                                                },
                                                "deptCode": {
                                                    "type": "string"
                                                },
                                                "agencyNumber": {
                                                    "type": "string"
                                                },
                                                "accountNumbers": {
                                                    "type": "array",
                                                    "items": {
                                                        "type": "string"
                                                    }
                                                },
                                                "fssTokenId": {
                                                    "type": "string"
                                                }
                                            }
                                        }
                                    }
                                }
                            ]
                        },
                        "accept-language": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    }
                },
                "sourceIp": {
                    "type": "string"
                },
                "deviceType": {
                    "type": [
                        "null",
                        "string"
                    ]
                }
            }
        },
        {
            "additionalItems": false,
            "properties": {
                "items": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "required": [
                            "id"
                        ],
                        "properties": {
                            "id": {
                                "description": "id of the favorite list",
                                "type": "number",
                                "minimum": 0
                            },
                            "name": {
                                "description": "name of the favorite list",
                                "type": [
                                    "string",
                                    "null"
                                ]
                            },
                            "order": {
                                "description": "order of the favorite list",
                                "type": [
                                    "number",
                                    "null"
                                ]
                            },
                            "itemList": {
                                "description": "list of the code in that favorite list",
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "required": [
                                        "isNote",
                                        "data"
                                    ],
                                    "properties": {
                                        "isNote": {
                                            "description": "is Note or not. If not a note, count as stock",
                                            "type": "boolean"
                                        },
                                        "data": {
                                            "description": "code, exp: VIC",
                                            "type": "string"
                                        }
                                    }
                                },
                                "additionalItems": false
                            }
                        }
                    }
                }
            }
        }
    ]
};
let favoriteListUpdateRequestAjv = null;
function favoriteListUpdateRequestValidator() {
    if (favoriteListUpdateRequestAjv == null) {
        favoriteListUpdateRequestAjv = new Ajv({ validateSchema: false }).compile(exports.favoriteListUpdateRequestSchema);
    }
    return favoriteListUpdateRequestAjv;
}
exports.favoriteListUpdateRequestValidator = favoriteListUpdateRequestValidator;
//# sourceMappingURL=favoriteListUpdateRequest.js.map