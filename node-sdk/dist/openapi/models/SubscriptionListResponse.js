"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionListResponse = void 0;
class SubscriptionListResponse {
    constructor() {
    }
    static getAttributeTypeMap() {
        return SubscriptionListResponse.attributeTypeMap;
    }
}
exports.SubscriptionListResponse = SubscriptionListResponse;
SubscriptionListResponse.discriminator = undefined;
SubscriptionListResponse.attributeTypeMap = [
    {
        "name": "data",
        "baseName": "data",
        "type": "Array<ISubscription>",
        "format": ""
    },
    {
        "name": "has_more",
        "baseName": "has_more",
        "type": "boolean",
        "format": ""
    },
    {
        "name": "page",
        "baseName": "page",
        "type": "number",
        "format": "double"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number",
        "format": "double"
    }
];
//# sourceMappingURL=SubscriptionListResponse.js.map