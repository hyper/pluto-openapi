"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAccount = void 0;
class IAccount {
    constructor() {
    }
    static getAttributeTypeMap() {
        return IAccount.attributeTypeMap;
    }
}
exports.IAccount = IAccount;
IAccount.discriminator = undefined;
IAccount.attributeTypeMap = [
    {
        "name": "application_fee_percent",
        "baseName": "application_fee_percent",
        "type": "number",
        "format": "double"
    },
    {
        "name": "branding",
        "baseName": "branding",
        "type": "IBranding",
        "format": ""
    },
    {
        "name": "business_profile",
        "baseName": "business_profile",
        "type": "IBusinessProfile",
        "format": ""
    },
    {
        "name": "connected_accounts",
        "baseName": "connected_accounts",
        "type": "Array<string>",
        "format": ""
    },
    {
        "name": "created",
        "baseName": "created",
        "type": "number",
        "format": "double"
    },
    {
        "name": "id",
        "baseName": "id",
        "type": "string",
        "format": ""
    },
    {
        "name": "integrations",
        "baseName": "integrations",
        "type": "IIntegrations",
        "format": ""
    },
    {
        "name": "invoice_prefix",
        "baseName": "invoice_prefix",
        "type": "string",
        "format": ""
    },
    {
        "name": "object",
        "baseName": "object",
        "type": "string",
        "format": ""
    },
    {
        "name": "parent_account",
        "baseName": "parent_account",
        "type": "string",
        "format": ""
    },
    {
        "name": "platform_account",
        "baseName": "platform_account",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "settings",
        "baseName": "settings",
        "type": "ISettings",
        "format": ""
    },
    {
        "name": "team",
        "baseName": "team",
        "type": "Array<ITeamMember>",
        "format": ""
    },
    {
        "name": "test",
        "baseName": "test",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "verified",
        "baseName": "verified",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "webhook_portal",
        "baseName": "webhook_portal",
        "type": "string",
        "format": ""
    }
];
//# sourceMappingURL=IAccount.js.map