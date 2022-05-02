"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvoiceBody = void 0;
class CreateInvoiceBody {
    constructor() {
    }
    static getAttributeTypeMap() {
        return CreateInvoiceBody.attributeTypeMap;
    }
}
exports.CreateInvoiceBody = CreateInvoiceBody;
CreateInvoiceBody.discriminator = undefined;
CreateInvoiceBody.attributeTypeMap = [
    {
        "name": "account",
        "baseName": "account",
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
        "name": "chain",
        "baseName": "chain",
        "type": "string",
        "format": ""
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "string",
        "format": ""
    },
    {
        "name": "customer",
        "baseName": "customer",
        "type": "string",
        "format": ""
    },
    {
        "name": "due",
        "baseName": "due",
        "type": "string",
        "format": ""
    },
    {
        "name": "number",
        "baseName": "number",
        "type": "string",
        "format": ""
    },
    {
        "name": "product",
        "baseName": "product",
        "type": "string",
        "format": ""
    },
    {
        "name": "transaction",
        "baseName": "transaction",
        "type": "string",
        "format": ""
    },
    {
        "name": "wallet",
        "baseName": "wallet",
        "type": "string",
        "format": ""
    },
    {
        "name": "fee_data",
        "baseName": "fee_data",
        "type": "Array<Fee>",
        "format": ""
    }
];
//# sourceMappingURL=CreateInvoiceBody.js.map