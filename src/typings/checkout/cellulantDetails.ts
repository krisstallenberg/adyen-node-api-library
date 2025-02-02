/*
 * The version of the OpenAPI document: v69
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */


export class CellulantDetails {
    /**
    * The Cellulant issuer.
    */
    'issuer'?: string;
    /**
    * **Cellulant**
    */
    'type'?: CellulantDetails.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "issuer",
            "baseName": "issuer",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "CellulantDetails.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return CellulantDetails.attributeTypeMap;
    }
}

export namespace CellulantDetails {
    export enum TypeEnum {
        Cellulant = <any> 'cellulant'
    }
}
