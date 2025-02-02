/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Standalone {
    /**
    * The default currency that will be used when the device is in standalone mode (ISO 4217 - 3 letter code).
    */
    'currencyCode'?: string;
    /**
    * Enable standalone mode.
    */
    'enableStandalone'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "currencyCode",
            "baseName": "currencyCode",
            "type": "string"
        },
        {
            "name": "enableStandalone",
            "baseName": "enableStandalone",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Standalone.attributeTypeMap;
    }
}

