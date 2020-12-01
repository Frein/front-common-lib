export interface Organization {
    oid: number;
    fullName: string | null;
    shortName: string | null;
    ogrn: string | null;
    type: string | null;
    chief: boolean;
    active: boolean;
}