/**
 * Pluto
 * The API for Pluto
 *
 * OpenAPI spec version: 1.0
 * Contact: support@pluto.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from './Account';
import { Customer } from './Customer';
import { InvoiceAllOf } from './InvoiceAllOf';
import { LineItem } from './LineItem';
import { Model } from './Model';
import { Price } from './Price';
import { Subscription } from './Subscription';
import { HttpFile } from '../http/http';

export class Invoice {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account'?: string | Account;
    'status': InvoiceStatusEnum;
    'number': string;
    'price': string | Price;
    'customer': string | Customer;
    'line_items'?: Array<LineItem>;
    'trial_period_days'?: number;
    'subscription'?: string | Subscription;
    'period_start'?: number;
    'period_end'?: number;
    'due'?: number;
    'notify': boolean;
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "object",
            "baseName": "object",
            "type": "string",
            "format": ""
        },
        {
            "name": "test",
            "baseName": "test",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
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
            "type": "InvoiceStatusEnum",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string | Price",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "line_items",
            "baseName": "line_items",
            "type": "Array<LineItem>",
            "format": ""
        },
        {
            "name": "trial_period_days",
            "baseName": "trial_period_days",
            "type": "number",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string | Subscription",
            "format": ""
        },
        {
            "name": "period_start",
            "baseName": "period_start",
            "type": "number",
            "format": ""
        },
        {
            "name": "period_end",
            "baseName": "period_end",
            "type": "number",
            "format": ""
        },
        {
            "name": "due",
            "baseName": "due",
            "type": "number",
            "format": ""
        },
        {
            "name": "notify",
            "baseName": "notify",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Invoice.attributeTypeMap;
    }

    public constructor() {
    }
}


export type InvoiceStatusEnum = "open" | "paid" | "void" | "past_due" | "uncollectible" ;

