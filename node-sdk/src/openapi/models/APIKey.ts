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

import { HttpFile } from '../http/http';

export class APIKey {
    'account'?: string;
    'admin'?: boolean;
    'created': Date;
    'id': string;
    'key'?: string;
    'type'?: APIKeyTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "admin",
            "baseName": "admin",
            "type": "boolean",
            "format": ""
        },
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
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "APIKeyTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return APIKey.attributeTypeMap;
    }

    public constructor() {
    }
}


export type APIKeyTypeEnum = "publishable" | "secret" | "restricted" ;

