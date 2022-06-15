import { Account } from './Account';
import { Invoice } from './Invoice';
import { PaymentIntent } from './PaymentIntent';
export declare class Transfer {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'description'?: string;
    'invoice': string | Invoice;
    'payment_intent': string | PaymentIntent;
    'percent': number;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
