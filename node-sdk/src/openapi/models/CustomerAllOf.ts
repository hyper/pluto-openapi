/**
 * Pluto
 * The API for Pluto
 *
 * OpenAPI spec version: 1.0
 * Contact: support@pluto.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Account } from './Account';
import { CustomersIdBillingDetails } from './CustomersIdBillingDetails';
import { Wallet } from './Wallet';
import { HttpFile } from '../http/http';

export class CustomerAllOf {
    'account'?: string | Account;
    'billing_details'?: CustomersIdBillingDetails;
    'email'?: string;
    'name'?: string;
    'phone'?: string;
    'wallets'?: Array<Wallet>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string | Account",
            "format": ""
        },
        {
            "name": "billing_details",
            "baseName": "billing_details",
            "type": "CustomersIdBillingDetails",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phone",
            "baseName": "phone",
            "type": "string",
            "format": ""
        },
        {
            "name": "wallets",
            "baseName": "wallets",
            "type": "Array<Wallet>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

