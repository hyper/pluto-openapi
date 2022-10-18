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

import { BasePrice } from './BasePrice';
import { Chain } from './Chain';
import { Currency } from './Currency';
import { CustomAmount } from './CustomAmount';
import { HttpFile } from '../http/http';

export class IPrice {
    'account': string;
    'amount'?: number;
    'application_fee_percent'?: number;
    'archived': boolean;
    'base_price'?: BasePrice;
    'billing_period_days'?: number;
    'chain': Chain;
    'created': number;
    'currency': Currency;
    'custom_amount'?: CustomAmount;
    'id': string;
    'metadata': { [key: string]: any; };
    'object': string;
    'platform_account'?: string;
    'product'?: string;
    'test': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
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
            "format": "double"
        },
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
            "format": "double"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "base_price",
            "baseName": "base_price",
            "type": "BasePrice",
            "format": ""
        },
        {
            "name": "billing_period_days",
            "baseName": "billing_period_days",
            "type": "number",
            "format": "double"
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "Chain",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number",
            "format": "double"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "Currency",
            "format": ""
        },
        {
            "name": "custom_amount",
            "baseName": "custom_amount",
            "type": "CustomAmount",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
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
            "name": "test",
            "baseName": "test",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IPrice.attributeTypeMap;
    }

    public constructor() {
    }
}
