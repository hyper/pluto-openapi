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
import { HttpFile } from '../http/http';

export class NotificationAllOf {
    'account': string | Account;
    'type': NotificationAllOfTypeEnum;
    'data': any;
    'emails': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "NotificationAllOfTypeEnum",
            "format": ""
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any",
            "format": ""
        },
        {
            "name": "emails",
            "baseName": "emails",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NotificationAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NotificationAllOfTypeEnum = "invoice.open" | "invoice.uncollectible" | "invoice.void" | "payment_intent.failed" | "payment_intent.succeeded" | "login" | "team.invite" ;

