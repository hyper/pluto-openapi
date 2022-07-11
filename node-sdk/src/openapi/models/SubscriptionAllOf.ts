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
import { Invoice } from './Invoice';
import { PaymentIntentAllOfLineItems } from './PaymentIntentAllOfLineItems';
import { Price } from './Price';
import { HttpFile } from '../http/http';

export class SubscriptionAllOf {
    'account': string | Account;
    'cancel_at'?: number;
    'cancel_at_period_end': boolean;
    'canceled_at'?: number;
    'current_period_end'?: number;
    'current_period_start'?: number;
    'customer': string | Customer;
    'latest_invoice'?: Invoice;
    'line_items'?: Array<PaymentIntentAllOfLineItems>;
    'pause_collection'?: boolean;
    'platform_account'?: string | Account;
    'price': string | Price;
    'status': SubscriptionAllOfStatusEnum;
    'trial_period_days'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "cancel_at",
            "baseName": "cancel_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "cancel_at_period_end",
            "baseName": "cancel_at_period_end",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "canceled_at",
            "baseName": "canceled_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "current_period_end",
            "baseName": "current_period_end",
            "type": "number",
            "format": ""
        },
        {
            "name": "current_period_start",
            "baseName": "current_period_start",
            "type": "number",
            "format": "date-time"
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "latest_invoice",
            "baseName": "latest_invoice",
            "type": "Invoice",
            "format": ""
        },
        {
            "name": "line_items",
            "baseName": "line_items",
            "type": "Array<PaymentIntentAllOfLineItems>",
            "format": ""
        },
        {
            "name": "pause_collection",
            "baseName": "pause_collection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string | Price",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SubscriptionAllOfStatusEnum",
            "format": ""
        },
        {
            "name": "trial_period_days",
            "baseName": "trial_period_days",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SubscriptionAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SubscriptionAllOfStatusEnum = "active" | "canceled" | "trialing" | "past_due" | "incomplete" ;

