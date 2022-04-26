import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { Payment } from '../models/Payment';
export declare class PaymentsApiRequestFactory extends BaseAPIRequestFactory {
  list(
    limit?: number,
    page?: number,
    sort?: any,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
  retrieve(
    paymentId: string,
    expand?: string,
    prismAccount?: string,
    _options?: Configuration
  ): Promise<RequestContext>;
}
export declare class PaymentsApiResponseProcessor {
  list(response: ResponseContext): Promise<InlineResponse2004>;
  retrieve(response: ResponseContext): Promise<Payment>;
}