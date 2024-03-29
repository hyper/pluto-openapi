/**
 * api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { IBranding } from './IBranding';
import { IBusinessProfile } from './IBusinessProfile';
import { IIntegrations } from './IIntegrations';
import { IPayoutWallet } from './IPayoutWallet';
import { ISettings } from './ISettings';
import { ITeamMember } from './ITeamMember';
import { HttpFile } from '../http/http';

export class IAccount {
    'id': string;
    'object': string;
    'created': number;
    'test': boolean;
    'parent_account'?: string;
    'branding': IBranding;
    'invoice_prefix'?: string;
    'connected_accounts': Array<string>;
    'platform_account': boolean;
    'webhook_portal'?: string;
    'application_fee_percent': number;
    'team': Array<ITeamMember>;
    'verified': boolean;
    'business_profile': IBusinessProfile;
    'settings': ISettings;
    'integrations': IIntegrations;
    'payout_wallets': Array<IPayoutWallet>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
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
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": "double"
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parent_account",
            "baseName": "parent_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "branding",
            "baseName": "branding",
            "type": "IBranding",
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
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "webhook_portal",
            "baseName": "webhook_portal",
            "type": "string",
            "format": ""
        },
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "Array<ITeamMember>",
            "format": ""
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "business_profile",
            "baseName": "business_profile",
            "type": "IBusinessProfile",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "ISettings",
            "format": ""
        },
        {
            "name": "integrations",
            "baseName": "integrations",
            "type": "IIntegrations",
            "format": ""
        },
        {
            "name": "payout_wallets",
            "baseName": "payout_wallets",
            "type": "Array<IPayoutWallet>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IAccount.attributeTypeMap;
    }

    public constructor() {
    }
}

