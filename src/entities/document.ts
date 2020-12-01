export interface Document {
    type: string;
    series: string | null;
    number: string | null;
    latinLastName: string | null;
    latinFirstName: string | null;
    issueId: string | null;
    issuedBy: string | null;
    issueDate: string | null;
    expireDate: string | null;
}