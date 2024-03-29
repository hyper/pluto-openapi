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

import { HttpFile } from '../http/http';

export class IPayments {
    'invoice_prefix'?: string;
    'invoice_reminder_frequency': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "invoice_prefix",
            "baseName": "invoice_prefix",
            "type": "string",
            "format": ""
        },
        {
            "name": "invoice_reminder_frequency",
            "baseName": "invoice_reminder_frequency",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return IPayments.attributeTypeMap;
    }

    public constructor() {
    }
}

