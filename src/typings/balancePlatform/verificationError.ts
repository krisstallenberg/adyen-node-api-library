/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { RemediatingAction } from './remediatingAction';
import { VerificationErrorRecursive } from './verificationErrorRecursive';

export class VerificationError {
    /**
    * The verification error code.
    */
    'code'?: string;
    /**
    * A description of the error.
    */
    'message'?: string;
    /**
    * Contains the actions that you can take to resolve the verification error.
    */
    'remediatingActions'?: Array<RemediatingAction>;
    /**
    * Contains more granular information about the verification error.
    */
    'subErrors'?: Array<VerificationErrorRecursive>;
    /**
    * The type of error.   Possible values: **invalidInput**, **dataMissing**.
    */
    'type'?: VerificationError.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "remediatingActions",
            "baseName": "remediatingActions",
            "type": "Array<RemediatingAction>"
        },
        {
            "name": "subErrors",
            "baseName": "subErrors",
            "type": "Array<VerificationErrorRecursive>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "VerificationError.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return VerificationError.attributeTypeMap;
    }
}

export namespace VerificationError {
    export enum TypeEnum {
        DataMissing = <any> 'dataMissing',
        InvalidInput = <any> 'invalidInput',
        PendingStatus = <any> 'pendingStatus'
    }
}
