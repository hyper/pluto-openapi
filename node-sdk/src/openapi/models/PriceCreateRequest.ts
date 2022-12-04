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

export class PriceCreateRequest {
    'amount'?: number;
    'currency'?: Currency;
    'chain'?: Chain;
    'archived'?: boolean;
    'metadata'?: { [key: string]: any; };
    'custom_amount'?: CustomAmount;
    'product'?: string;
    'base_price'?: BasePrice;
    'billing_period_days'?: number;
    'application_fee_percent'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
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
            "name": "chain",
            "baseName": "chain",
            "type": "Chain",
            "format": ""
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "custom_amount",
            "baseName": "custom_amount",
            "type": "CustomAmount",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string",
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
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return PriceCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

