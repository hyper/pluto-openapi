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

export class InlineObject {
    'price': string;
    'customer': string;
    'status'?: string;
    'pause_collection'?: boolean;
    'cancel_at'?: number;
    'trial_period_duration'?: number;
    'metadata'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "price",
            "baseName": "price",
            "type": "string",
            "format": ""
        },
        {
            "name": "customer",
            "baseName": "customer",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "pause_collection",
            "baseName": "pause_collection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "cancel_at",
            "baseName": "cancel_at",
            "type": "number",
            "format": ""
        },
        {
            "name": "trial_period_duration",
            "baseName": "trial_period_duration",
            "type": "number",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject.attributeTypeMap;
    }

    public constructor() {
    }
}
