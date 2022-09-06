/**
 * Pluto
 * The API for Pluto
 *
 * OpenAPI spec version: 1.0
 * Contact: support@pluto.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class PriceAllOfCustomAmount {
    'minimum'?: number;
    'maximum'?: number;
    '_default'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "minimum",
            "baseName": "minimum",
            "type": "number",
            "format": ""
        },
        {
            "name": "maximum",
            "baseName": "maximum",
            "type": "number",
            "format": ""
        },
        {
            "name": "_default",
            "baseName": "default",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PriceAllOfCustomAmount.attributeTypeMap;
    }

    public constructor() {
    }
}
