/*
 * The version of the OpenAPI document: v2
 * Contact: developer-experience@adyen.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit this class manually.
 */

import { DocumentReference } from './documentReference';
import { EntityReference } from './entityReference';
import { Individual } from './individual';
import { LegalEntityAssociation } from './legalEntityAssociation';
import { Organization } from './organization';
import { SoleProprietorship } from './soleProprietorship';

export class LegalEntity {
    /**
    * List of documents uploaded for the legal entity.
    */
    'documentDetails'?: Array<DocumentReference>;
    /**
    * List of documents uploaded for the legal entity.
    */
    'documents'?: Array<EntityReference>;
    /**
    * List of legal entities associated with the current legal entity. For example, ultimate beneficial owners associated with an organization through ownership or control, or as signatories.
    */
    'entityAssociations'?: Array<LegalEntityAssociation>;
    /**
    * The unique identifier of the legal entity.
    */
    'id': string;
    'individual'?: Individual;
    'organization'?: Organization;
    /**
    * Your reference for the legal entity, maximum 150 characters.
    */
    'reference'?: string;
    'soleProprietorship'?: SoleProprietorship;
    /**
    * List of transfer instruments owned by the legal entity.
    */
    'transferInstruments'?: Array<EntityReference>;
    /**
    * The type of legal entity.   Possible values: **individual**, **organization**, or **soleProprietorship**.
    */
    'type': LegalEntity.TypeEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "documentDetails",
            "baseName": "documentDetails",
            "type": "Array<DocumentReference>"
        },
        {
            "name": "documents",
            "baseName": "documents",
            "type": "Array<EntityReference>"
        },
        {
            "name": "entityAssociations",
            "baseName": "entityAssociations",
            "type": "Array<LegalEntityAssociation>"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "individual",
            "baseName": "individual",
            "type": "Individual"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "Organization"
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string"
        },
        {
            "name": "soleProprietorship",
            "baseName": "soleProprietorship",
            "type": "SoleProprietorship"
        },
        {
            "name": "transferInstruments",
            "baseName": "transferInstruments",
            "type": "Array<EntityReference>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalEntity.TypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return LegalEntity.attributeTypeMap;
    }
}

export namespace LegalEntity {
    export enum TypeEnum {
        Individual = <any> 'individual',
        Organization = <any> 'organization',
        SoleProprietorship = <any> 'soleProprietorship',
        Trust = <any> 'trust',
        UnincorporatedPartnership = <any> 'unincorporatedPartnership'
    }
}
