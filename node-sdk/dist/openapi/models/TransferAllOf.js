"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferAllOf = void 0;
class TransferAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return TransferAllOf.attributeTypeMap;
    }
}
exports.TransferAllOf = TransferAllOf;
TransferAllOf.discriminator = undefined;
TransferAllOf.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "invoice",
        "baseName": "invoice",
        "type": "string | Invoice",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string | Wallet",
        "format": ""
    },
    {
        "name": "percent",
        "baseName": "percent",
        "type": "number",
        "format": ""
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string",
        "format": ""
    },
    {
        "name": "amount",
        "baseName": "amount",
        "type": "number",
        "format": ""
    },
    {
        "name": "usd_amount",
        "baseName": "usd_amount",
        "type": "number",
        "format": ""
    }
];
//# sourceMappingURL=TransferAllOf.js.map