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
import { CheckoutAllOf } from './CheckoutAllOf';
import { CheckoutAllOfCustomerDetails } from './CheckoutAllOfCustomerDetails';
import { Customer } from './Customer';
import { Model } from './Model';
import { PaymentIntent } from './PaymentIntent';
import { PaymentLink } from './PaymentLink';
import { HttpFile } from '../http/http';

export class Checkout {
    'id': string;
    'created': Date;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'platform_account': string | Account;
    'status'?: CheckoutStatusEnum;
    'customer_details': CheckoutAllOfCustomerDetails;
    'amount': number;
    'payment_link': string | PaymentLink;
    'payment_intent': string | PaymentIntent;
    'customer': string | Customer;
    'last_payment_error': string;

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
            "type": "CheckoutStatusEnum",
            "format": ""
        },
        {
            "name": "customer_details",
            "baseName": "customer_details",
            "type": "CheckoutAllOfCustomerDetails",
            "format": ""
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "payment_link",
            "baseName": "payment_link",
            "type": "string | PaymentLink",
            "format": ""
        },
        {
            "name": "payment_intent",
            "baseName": "payment_intent",
            "type": "string | PaymentIntent",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string | Customer",
            "format": ""
        },
        {
            "name": "last_payment_error",
            "baseName": "last_payment_error",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Checkout.attributeTypeMap;
    }

    public constructor() {
    }
}


export type CheckoutStatusEnum = "processing" | "requires_confirmation" | "succeeded" | "failed" ;

