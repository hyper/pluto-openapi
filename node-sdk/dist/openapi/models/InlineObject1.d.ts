export declare class InlineObject1 {
    'amount'?: string;
    'currency': string;
    'chain': string;
    'product': string;
    'base_price'?: string;
    'metadata'?: any;
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
