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
import { Invoice } from './Invoice';
import { Model } from './Model';
import { PaymentIntent } from './PaymentIntent';
import { PayoutWallet } from './PayoutWallet';
import { TransferAllOf } from './TransferAllOf';
import { HttpFile } from '../http/http';

export class Transfer {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'description'?: string;
    'invoice': string | Invoice;
    'percent': number;
    'payment_intent': string | PaymentIntent;
    'wallet': string | PayoutWallet;

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
            "name": "description",
            "baseName": "description",
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
            "name": "percent",
            "baseName": "percent",
            "type": "number",
            "format": ""
        },
        {
            "name": "payment_intent",
            "baseName": "payment_intent",
            "type": "string | PaymentIntent",
            "format": ""
        },
        {
            "name": "wallet",
            "baseName": "wallet",
            "type": "string | PayoutWallet",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Transfer.attributeTypeMap;
    }

    public constructor() {
    }
}

