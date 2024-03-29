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

import { EventType } from './EventType';
import { HttpFile } from '../http/http';

export class WebhookUpdateRequest {
    'event_types'?: Array<EventType>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "event_types",
            "baseName": "event_types",
            "type": "Array<EventType>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WebhookUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

