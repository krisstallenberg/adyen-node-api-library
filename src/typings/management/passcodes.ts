/*
 * The version of the OpenAPI document: v1
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class Passcodes {
    /**
    * The pin code used to enter the admin menu
    */
    'adminMenuPin'?: string;
    /**
    * Allows merchant to create a dedicated PIN for standalone refund functionality
    */
    'refundPin'?: string;
    /**
    * Passcode to unlock screen after sleep
    */
    'screenLockPin'?: string;
    /**
    * The PIN code used to enter the transaction menu
    */
    'txMenuPin'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "adminMenuPin",
            "baseName": "adminMenuPin",
            "type": "string"
        },
        {
            "name": "refundPin",
            "baseName": "refundPin",
            "type": "string"
        },
        {
            "name": "screenLockPin",
            "baseName": "screenLockPin",
            "type": "string"
        },
        {
            "name": "txMenuPin",
            "baseName": "txMenuPin",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Passcodes.attributeTypeMap;
    }
}

