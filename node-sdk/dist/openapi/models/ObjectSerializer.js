"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("./APIKey"), exports);
__exportStar(require("./APIKeyAllOf"), exports);
__exportStar(require("./Account"), exports);
__exportStar(require("./AccountBranding"), exports);
__exportStar(require("./Customer"), exports);
__exportStar(require("./CustomerBillingDetails"), exports);
__exportStar(require("./CustomerBillingDetailsAddress"), exports);
__exportStar(require("./CustomerData"), exports);
__exportStar(require("./CustomersBillingDetails"), exports);
__exportStar(require("./CustomersBillingDetailsAddress"), exports);
__exportStar(require("./Data"), exports);
__exportStar(require("./Fee"), exports);
__exportStar(require("./FeeData"), exports);
__exportStar(require("./InlineResponse200"), exports);
__exportStar(require("./InlineResponse2001"), exports);
__exportStar(require("./InlineResponse2002"), exports);
__exportStar(require("./InlineResponse2003"), exports);
__exportStar(require("./InlineResponse2004"), exports);
__exportStar(require("./InlineResponse2005"), exports);
__exportStar(require("./InlineResponse2006"), exports);
__exportStar(require("./InlineResponse2007"), exports);
__exportStar(require("./InlineResponse2008"), exports);
__exportStar(require("./Invoice"), exports);
__exportStar(require("./InvoiceData"), exports);
__exportStar(require("./Log"), exports);
__exportStar(require("./Model"), exports);
__exportStar(require("./Payment"), exports);
__exportStar(require("./PayoutWallet"), exports);
__exportStar(require("./PayoutWalletData"), exports);
__exportStar(require("./Product"), exports);
__exportStar(require("./ProductData"), exports);
__exportStar(require("./Transaction"), exports);
__exportStar(require("./Transfer"), exports);
__exportStar(require("./TransferData"), exports);
__exportStar(require("./Wallet"), exports);
__exportStar(require("./WalletData"), exports);
__exportStar(require("./Webhook"), exports);
__exportStar(require("./WebhookData"), exports);
const APIKey_1 = require("./APIKey");
const APIKeyAllOf_1 = require("./APIKeyAllOf");
const Account_1 = require("./Account");
const AccountBranding_1 = require("./AccountBranding");
const Customer_1 = require("./Customer");
const CustomerBillingDetails_1 = require("./CustomerBillingDetails");
const CustomerBillingDetailsAddress_1 = require("./CustomerBillingDetailsAddress");
const CustomerData_1 = require("./CustomerData");
const CustomersBillingDetails_1 = require("./CustomersBillingDetails");
const CustomersBillingDetailsAddress_1 = require("./CustomersBillingDetailsAddress");
const Data_1 = require("./Data");
const Fee_1 = require("./Fee");
const FeeData_1 = require("./FeeData");
const InlineResponse200_1 = require("./InlineResponse200");
const InlineResponse2001_1 = require("./InlineResponse2001");
const InlineResponse2002_1 = require("./InlineResponse2002");
const InlineResponse2003_1 = require("./InlineResponse2003");
const InlineResponse2004_1 = require("./InlineResponse2004");
const InlineResponse2005_1 = require("./InlineResponse2005");
const InlineResponse2006_1 = require("./InlineResponse2006");
const InlineResponse2007_1 = require("./InlineResponse2007");
const InlineResponse2008_1 = require("./InlineResponse2008");
const Invoice_1 = require("./Invoice");
const InvoiceData_1 = require("./InvoiceData");
const Log_1 = require("./Log");
const Model_1 = require("./Model");
const Payment_1 = require("./Payment");
const PayoutWallet_1 = require("./PayoutWallet");
const PayoutWalletData_1 = require("./PayoutWalletData");
const Product_1 = require("./Product");
const ProductData_1 = require("./ProductData");
const Transaction_1 = require("./Transaction");
const Transfer_1 = require("./Transfer");
const TransferData_1 = require("./TransferData");
const Wallet_1 = require("./Wallet");
const WalletData_1 = require("./WalletData");
const Webhook_1 = require("./Webhook");
const WebhookData_1 = require("./WebhookData");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let enumsMap = new Set([
    "APIKeyTypeEnum",
    "APIKeyAllOfTypeEnum",
    "InvoiceChainEnum",
    "InvoiceCurrencyEnum",
    "InvoiceStatusEnum",
    "LogMethodEnum",
    "PaymentStatusEnum",
    "PayoutWalletChainEnum",
    "ProductCurrencyEnum",
    "TransactionChainEnum",
    "TransactionCurrencyEnum",
    "TransactionStatusEnum",
    "WalletChainEnum",
]);
let typeMap = {
    "APIKey": APIKey_1.APIKey,
    "APIKeyAllOf": APIKeyAllOf_1.APIKeyAllOf,
    "Account": Account_1.Account,
    "AccountBranding": AccountBranding_1.AccountBranding,
    "Customer": Customer_1.Customer,
    "CustomerBillingDetails": CustomerBillingDetails_1.CustomerBillingDetails,
    "CustomerBillingDetailsAddress": CustomerBillingDetailsAddress_1.CustomerBillingDetailsAddress,
    "CustomerData": CustomerData_1.CustomerData,
    "CustomersBillingDetails": CustomersBillingDetails_1.CustomersBillingDetails,
    "CustomersBillingDetailsAddress": CustomersBillingDetailsAddress_1.CustomersBillingDetailsAddress,
    "Data": Data_1.Data,
    "Fee": Fee_1.Fee,
    "FeeData": FeeData_1.FeeData,
    "InlineResponse200": InlineResponse200_1.InlineResponse200,
    "InlineResponse2001": InlineResponse2001_1.InlineResponse2001,
    "InlineResponse2002": InlineResponse2002_1.InlineResponse2002,
    "InlineResponse2003": InlineResponse2003_1.InlineResponse2003,
    "InlineResponse2004": InlineResponse2004_1.InlineResponse2004,
    "InlineResponse2005": InlineResponse2005_1.InlineResponse2005,
    "InlineResponse2006": InlineResponse2006_1.InlineResponse2006,
    "InlineResponse2007": InlineResponse2007_1.InlineResponse2007,
    "InlineResponse2008": InlineResponse2008_1.InlineResponse2008,
    "Invoice": Invoice_1.Invoice,
    "InvoiceData": InvoiceData_1.InvoiceData,
    "Log": Log_1.Log,
    "Model": Model_1.Model,
    "Payment": Payment_1.Payment,
    "PayoutWallet": PayoutWallet_1.PayoutWallet,
    "PayoutWalletData": PayoutWalletData_1.PayoutWalletData,
    "Product": Product_1.Product,
    "ProductData": ProductData_1.ProductData,
    "Transaction": Transaction_1.Transaction,
    "Transfer": Transfer_1.Transfer,
    "TransferData": TransferData_1.TransferData,
    "Wallet": Wallet_1.Wallet,
    "WalletData": WalletData_1.WalletData,
    "Webhook": Webhook_1.Webhook,
    "WebhookData": WebhookData_1.WebhookData,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    static stringify(data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map