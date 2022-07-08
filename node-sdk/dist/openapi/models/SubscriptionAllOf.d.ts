import { Account } from './Account';
import { Customer } from './Customer';
import { Invoice } from './Invoice';
import { PaymentIntentAllOfLineItems } from './PaymentIntentAllOfLineItems';
import { Price } from './Price';
export declare class SubscriptionAllOf {
    'account': string | Account;
    'cancel_at'?: number;
    'cancel_at_period_end': boolean;
    'canceled_at'?: number;
    'current_period_end': number;
    'current_period_start': number;
    'customer': string | Customer;
    'latest_invoice'?: Invoice;
    'line_items'?: Array<PaymentIntentAllOfLineItems>;
    'pause_collection': boolean;
    'platform_account'?: string | Account;
    'price': string | Price;
    'status': SubscriptionAllOfStatusEnum;
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
export declare type SubscriptionAllOfStatusEnum = "active" | "canceled" | "trialing" | "past_due";
