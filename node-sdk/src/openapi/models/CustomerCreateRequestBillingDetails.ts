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

import { Address } from './Address';
import { HttpFile } from '../http/http';

export class CustomerCreateRequestBillingDetails {
    'address': Address;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "address",
            "baseName": "address",
            "type": "Address",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CustomerCreateRequestBillingDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

