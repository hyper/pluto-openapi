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

import { ApiKeyType } from './ApiKeyType';
import { HttpFile } from '../http/http';

export class IApiKey {
    'account': string;
    'admin': boolean;
    'created': number;
    'id': string;
    'key': string;
    'last_used'?: Date | number;
    'name': string;
    'note'?: string;
    'object': string;
    'test': boolean;
    'type': ApiKeyType;

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
            "type": "number",
            "format": "double"
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
            "name": "last_used",
            "baseName": "last_used",
            "type": "Date | number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "note",
            "baseName": "note",
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
            "name": "type",
            "baseName": "type",
            "type": "ApiKeyType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IApiKey.attributeTypeMap;
    }

    public constructor() {
    }
}
