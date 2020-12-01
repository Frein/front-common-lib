import {IAddress} from "./address";
import {Document} from "./document";
import {Contact} from "./contact";
import {Organization} from "./organization";

export interface IUserInfo {
    userID: number;
    name: string;
    surname: string;
    middlename: string;
    inn: string;
    snils: string;
    addresses: Array<IAddress>;
    documents: Array<Document>;
    contacts: Array<Contact>;
    organizations: Array<Organization>;
}