import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ListPaymentIntentsResponse } from '../models/ListPaymentIntentsResponse';
import { PaymentIntent } from '../models/PaymentIntent';
export declare class PaymentIntentsApiRequestFactory extends BaseAPIRequestFactory {
    create(prism_account?: string, payment_intent?: PaymentIntent, _options?: Configuration): Promise<RequestContext>;
    list(prism_account?: string, expand?: string, limit?: number, page?: number, sort?: any, _options?: Configuration): Promise<RequestContext>;
    poll(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    retrieve(id: string, prism_account?: string, expand?: string, _options?: Configuration): Promise<RequestContext>;
    updateHash(prism_account?: string, body?: string, _options?: Configuration): Promise<RequestContext>;
}
export declare class PaymentIntentsApiResponseProcessor {
    create(response: ResponseContext): Promise<PaymentIntent>;
    list(response: ResponseContext): Promise<ListPaymentIntentsResponse>;
    poll(response: ResponseContext): Promise<PaymentIntent>;
    retrieve(response: ResponseContext): Promise<PaymentIntent>;
    updateHash(response: ResponseContext): Promise<PaymentIntent>;
}