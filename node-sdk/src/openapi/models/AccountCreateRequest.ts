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

import { IBusinessProfile } from './IBusinessProfile';
import { ISettings } from './ISettings';
import { HttpFile } from '../http/http';

export class AccountCreateRequest {
    'business_profile'?: IBusinessProfile;
    'settings'?: ISettings;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "business_profile",
            "baseName": "business_profile",
            "type": "IBusinessProfile",
            "format": ""
        },
        {
            "name": "settings",
            "baseName": "settings",
            "type": "ISettings",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

