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

export class LogAllOf {
    'api_key': string;
    'body'?: any;
    'created': Date;
    'headers'?: any;
    'ip': string;
    'method': LogAllOfMethodEnum;
    'origin'?: string;
    'query': any;
    'url': string;
    'success': boolean;

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
            "type": "any",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "any",
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
            "type": "LogAllOfMethodEnum",
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
            "type": "any",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "success",
            "baseName": "success",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}


export type LogAllOfMethodEnum = "POST" | "PATCH" | "DELETE" ;
