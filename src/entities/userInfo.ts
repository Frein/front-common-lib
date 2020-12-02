import {IAddress} from "./address";
import {IDocument} from "./document";
import {IOrganization} from "./organization";
import {IContact} from "./contact";


export interface IUserInfo {
    userID: number;
    name: string;
    surname: string;
    middlename: string;
    inn: string;
    snils: string;
    addresses: Array<IAddress>;
    documents: Array<IDocument>;
    contacts: Array<IContact>;
    organizations: Array<IOrganization>;
    permissions: any;
}