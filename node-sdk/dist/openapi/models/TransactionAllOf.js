"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionAllOf = void 0;
class TransactionAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransactionAllOf.attributeTypeMap;
    }
}
exports.TransactionAllOf = TransactionAllOf;
TransactionAllOf.discriminator = undefined;
TransactionAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "chain",
        "baseName": "chain",
        "type": "TransactionAllOfChainEnum",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "TransactionAllOfCurrencyEnum",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "string | Invoice",
        "format": ""
    },
    {
        "name": "metadata",
        "baseName": "metadata",
        "type": "any",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "TransactionAllOfStatusEnum",
        "format": ""
    },
    {
        "name": "transaction_hash",
        "baseName": "transaction_hash",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=TransactionAllOf.js.map