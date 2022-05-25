import { Account } from './Account';
import { Customer } from './Customer';
import { Fee } from './Fee';
import { Payment } from './Payment';
import { Price } from './Price';
import { Product } from './Product';
import { Transaction } from './Transaction';
import { Transfer } from './Transfer';
import { Wallet } from './Wallet';
export declare class Invoice {
    'created': Date;
    'id': string;
    'object': string;
    'test': boolean;
    'account': string | Account | any;
    'amount'?: number;
    'application_fee_percent'?: number;
    'chain': InvoiceChainEnum;
    'currency': InvoiceCurrencyEnum;
    'customer': string | Customer;
    'due'?: Date;
    'fees': Array<Fee>;
    'metadata'?: any;
    'number': string;
    'payment'?: Payment;
    'platform_account'?: string;
    'price': string | Price;
    'product'?: string | Product;
    'status': InvoiceStatusEnum;
    'transactions'?: Array<Transaction>;
    'transfers': Array<Transfer>;
    'wallet': string | Wallet;
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
export declare type InvoiceCurrencyEnum = "eth" | "sol";
export declare type InvoiceStatusEnum = "open" | "paid" | "unpaid" | "void";
