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

import { InvoiceStatus } from './InvoiceStatus';
import { HttpFile } from '../http/http';

export class InvoiceUpdateRequest {
    'status'?: InvoiceStatus;
    'metadata'?: { [key: string]: any; };
    'due'?: Date | number;
    'notify'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "InvoiceStatus",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "due",
            "baseName": "due",
            "type": "Date | number",
            "format": ""
        },
        {
            "name": "notify",
            "baseName": "notify",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InvoiceUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

