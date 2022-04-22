/**
 * Crypto
 * The API for Hyper's Crypto payments processor
 *
 * OpenAPI spec version: 1.0
 * Contact: support@hyper.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { InlineResponse20010Request } from './InlineResponse20010Request';
import { InlineResponse20010Response } from './InlineResponse20010Response';
import { HttpFile } from '../http/http';

export class InlineResponse20010 {
    'account': string;
    'created': string;
    'request': InlineResponse20010Request;
    'response': InlineResponse20010Response;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "string",
            "format": ""
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "string",
            "format": ""
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "InlineResponse20010Request",
            "format": ""
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "InlineResponse20010Response",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse20010.attributeTypeMap;
    }

    public constructor() {
    }
}
