"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountAllOf = void 0;
class AccountAllOf {
    constructor() {
    }
    static getAttributeTypeMap() {
        return AccountAllOf.attributeTypeMap;
    }
}
exports.AccountAllOf = AccountAllOf;
AccountAllOf.discriminator = undefined;
AccountAllOf.attributeTypeMap = [
    {
        "name": "parent_account",
        "baseName": "parent_account",
        "type": "string | Account",
        "format": ""
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string",
        "format": ""
    },
    {
        "name": "branding",
        "baseName": "branding",
        "type": "AccountAllOfBranding",
        "format": ""
    },
    {
        "name": "invoice_prefix",
        "baseName": "invoice_prefix",
        "type": "string",
        "format": ""
    },
    {
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Array<string> | Array<Account>",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "eth_wallet",
        "baseName": "eth_wallet",
        "type": "PayoutWallet",
        "format": ""
    },
    {
        "name": "sol_wallet",
        "baseName": "sol_wallet",
        "type": "PayoutWallet",
        "format": ""
    }
];
//# sourceMappingURL=AccountAllOf.js.map