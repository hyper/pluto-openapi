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
import { Fee } from './Fee';
import { Invoice } from './Invoice';
import { LineItem } from './LineItem';
import { Model } from './Model';
import { PaymentIntentAllOf } from './PaymentIntentAllOf';
import { Price } from './Price';
import { Subscription } from './Subscription';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class PaymentIntent {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account'?: string | Account;
    'platform_account'?: string | Account;
    'hash'?: string;
    'invoice'?: string | Invoice;
    'subscription'?: string | Subscription;
    'checkout'?: string | Subscription;
    'price'?: string | Price;
    'line_items'?: Array<LineItem>;
    'customer': string | Customer;
    'wallet'?: string | Wallet;
    'amount': number;
    'usd_amount'?: number;
    'exchange_rate'?: number;
    'application_fee_percent'?: number;
    'status': PaymentIntentStatusEnum;
    'chain': PaymentIntentChainEnum;
    'currency': PaymentIntentCurrencyEnum;
    'last_payment_error'?: string;
    'fees': Array<Fee>;
    'transfers': Array<Transfer>;
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
            "name": "hash",
            "baseName": "hash",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "string | Invoice",
            "format": ""
        },
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "string | Subscription",
            "format": ""
        },
        {
            "name": "checkout",
            "baseName": "checkout",
            "type": "string | Subscription",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "string | Price",
            "format": ""
        },
        {
            "name": "line_items",
            "baseName": "line_items",
            "type": "Array<LineItem>",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | Wallet",
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
        },
        {
            "name": "exchange_rate",
            "baseName": "exchange_rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "PaymentIntentStatusEnum",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "PaymentIntentChainEnum",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "PaymentIntentCurrencyEnum",
            "format": ""
        },
        {
            "name": "last_payment_error",
            "baseName": "last_payment_error",
            "type": "string",
            "format": ""
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "Array<Fee>",
            "format": ""
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<Transfer>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PaymentIntent.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PaymentIntentStatusEnum = "failed" | "succeeded" | "canceled" | "requires_confirmation" ;
export type PaymentIntentChainEnum = "eth" | "sol" ;
export type PaymentIntentCurrencyEnum = "eth" | "sol" ;

