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

export class AccountConnectRequest {
    'platform_account': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "platform_account",
            "baseName": "platform_account",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountConnectRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

