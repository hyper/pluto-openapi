import { Account } from './Account';
import { Customer } from './Customer';
import { InvoiceAllOfLineItems } from './InvoiceAllOfLineItems';
import { Payment } from './Payment';
import { Price } from './Price';
import { Subscription } from './Subscription';
export declare class Invoice {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account;
    'amount': number;
    'chain': InvoiceChainEnum;
    'customer': string | Customer;
    'due': number;
    'line_items'?: InvoiceAllOfLineItems;
    'metadata'?: any;
    'number': string;
    'payment'?: Payment;
    'period_end': number;
    'period_start': number;
    'platform_account'?: string | Account;
    'price': string | Price;
    'renewal'?: boolean;
    'send_reminders'?: string;
    'status': InvoiceStatusEnum;
    'subscription'?: string | Subscription;
    'trial_period_duration'?: number;
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
export declare type InvoiceChainEnum = "eth" | "sol";
export declare type InvoiceStatusEnum = "open" | "paid" | "void" | "past_due" | "uncollectible";
