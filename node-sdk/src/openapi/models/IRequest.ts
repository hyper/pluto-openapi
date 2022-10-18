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

import { Headers } from './Headers';
import { HttpFile } from '../http/http';

export class IRequest {
    'api_key': string;
    'body': { [key: string]: any; };
    'headers': Headers;
    'ip': string;
    'method': string;
    'origin': string;
    'query': { [key: string]: any; };
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "api_key",
            "baseName": "api_key",
            "type": "string",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "Headers",
            "format": ""
        },
        {
            "name": "ip",
            "baseName": "ip",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string",
            "format": ""
        },
        {
            "name": "origin",
            "baseName": "origin",
            "type": "string",
            "format": ""
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
