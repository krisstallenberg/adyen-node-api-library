/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { ShopperStatement } from './shopperStatement';

export class UpdatePaymentMethodInfo {
    /**
    * The list of countries where a payment method is available. By default, all countries supported by the payment method.
    */
    'countries'?: Array<string>;
    /**
    * The list of currencies that a payment method supports. By default, all currencies supported by the payment method.
    */
    'currencies'?: Array<string>;
    /**
    * Custom routing flags for acquirer routing.
    */
    'customRoutingFlags'?: Array<string>;
    /**
    * Indicates whether the payment method is enabled (**true**) or disabled (**false**).
    */
    'enabled'?: boolean;
    'shopperStatement'?: ShopperStatement;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "countries",
            "baseName": "countries",
            "type": "Array<string>"
        },
        {
            "name": "currencies",
            "baseName": "currencies",
            "type": "Array<string>"
        },
        {
            "name": "customRoutingFlags",
            "baseName": "customRoutingFlags",
            "type": "Array<string>"
        },
        {
            "name": "enabled",
            "baseName": "enabled",
            "type": "boolean"
        },
        {
            "name": "shopperStatement",
            "baseName": "shopperStatement",
            "type": "ShopperStatement"
        }    ];

    static getAttributeTypeMap() {
        return UpdatePaymentMethodInfo.attributeTypeMap;
    }
}

