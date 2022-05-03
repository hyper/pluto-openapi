/**
 * Prism
 * The API for Prism
 *
 * OpenAPI spec version: 1.0
 * Contact: support@prism.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from './Account';
import { Customer } from './Customer';
import { Fee } from './Fee';
import { InvoiceAllOf } from './InvoiceAllOf';
import { Model } from './Model';
import { Payment } from './Payment';
import { Product } from './Product';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class Invoice {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'chain': InvoiceChainEnum;
    'currency': InvoiceCurrencyEnum;
    'customer': string | Customer;
    'due'?: Date;
    'fees': Array<Fee>;
    'number': string;
    'payments'?: Array<Payment>;
    'product'?: string | Product;
    'status': InvoiceStatusEnum;
    'transaction'?: string;
    'transfers': Array<Transfer>;
    'wallet': string | Wallet;
    'application_fee_percent'?: number;
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
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
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "chain",
            "baseName": "chain",
            "type": "InvoiceChainEnum",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "InvoiceCurrencyEnum",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "due",
            "baseName": "due",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "fees",
            "baseName": "fees",
            "type": "Array<Fee>",
            "format": ""
        },
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<Payment>",
            "format": ""
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "string | Product",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceStatusEnum",
            "format": ""
        },
        {
            "name": "transaction",
            "baseName": "transaction",
            "type": "string",
            "format": ""
        },
        {
            "name": "transfers",
            "baseName": "transfers",
            "type": "Array<Transfer>",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | Wallet",
            "format": ""
        },
        {
            "name": "application_fee_percent",
            "baseName": "application_fee_percent",
            "type": "number",
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


export type InvoiceChainEnum = "eth" | "sol" ;
export type InvoiceCurrencyEnum = "eth" | "sol" ;
export type InvoiceStatusEnum = "open" | "paid" | "unpaid" | "void" ;

