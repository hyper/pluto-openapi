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

export class InlineObject5 {
    'account': string;
    'endpointUrl': string;
    'eventTypes': Array<any>;
    'secret': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpointUrl",
            "baseName": "endpoint_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventTypes",
            "baseName": "event_types",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "secret",
            "baseName": "secret",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject5.attributeTypeMap;
    }

    public constructor() {
    }
}

