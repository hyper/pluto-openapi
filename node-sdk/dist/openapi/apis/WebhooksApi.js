'use strict';
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.WebhooksApiResponseProcessor = exports.WebhooksApiRequestFactory = void 0;
const baseapi_1 = require('./baseapi');
const http_1 = require('../http/http');
const ObjectSerializer_1 = require('../models/ObjectSerializer');
const exception_1 = require('./exception');
const util_1 = require('../util');
class WebhooksApiRequestFactory extends baseapi_1.BaseAPIRequestFactory {
  _delete(webhookId, prismAccount, _options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      let _config = _options || this.configuration;
      if (webhookId === null || webhookId === undefined) {
        throw new baseapi_1.RequiredError('WebhooksApi', '_delete', 'webhookId');
      }
      const localVarPath = '/webhooks/{webhookId}'.replace(
        '{' + 'webhookId' + '}',
        encodeURIComponent(String(webhookId))
      );
      const requestContext = _config.baseServer.makeRequestContext(
        localVarPath,
        http_1.HttpMethod.DELETE
      );
      requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
      requestContext.setHeaderParam(
        'Prism-Account',
        ObjectSerializer_1.ObjectSerializer.serialize(prismAccount, 'string', '')
      );
      const defaultAuth =
        ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null ||
        _a === void 0
          ? void 0
          : _a.default) ||
        ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) ===
          null || _c === void 0
          ? void 0
          : _c.default);
      if (
        defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication
      ) {
        yield defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication(requestContext);
      }
      return requestContext;
    });
  }
  create(prismAccount, inlineObject5, _options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      let _config = _options || this.configuration;
      const localVarPath = '/webhooks';
      const requestContext = _config.baseServer.makeRequestContext(
        localVarPath,
        http_1.HttpMethod.POST
      );
      requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
      requestContext.setHeaderParam(
        'Prism-Account',
        ObjectSerializer_1.ObjectSerializer.serialize(prismAccount, 'string', '')
      );
      const contentType = ObjectSerializer_1.ObjectSerializer.getPreferredMediaType([
        'application/json',
      ]);
      requestContext.setHeaderParam('Content-Type', contentType);
      const serializedBody = ObjectSerializer_1.ObjectSerializer.stringify(
        ObjectSerializer_1.ObjectSerializer.serialize(inlineObject5, 'InlineObject5', ''),
        contentType
      );
      requestContext.setBody(serializedBody);
      const defaultAuth =
        ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null ||
        _a === void 0
          ? void 0
          : _a.default) ||
        ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) ===
          null || _c === void 0
          ? void 0
          : _c.default);
      if (
        defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication
      ) {
        yield defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication(requestContext);
      }
      return requestContext;
    });
  }
  list(limit, page, sort, expand, prismAccount, _options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      let _config = _options || this.configuration;
      const localVarPath = '/webhooks';
      const requestContext = _config.baseServer.makeRequestContext(
        localVarPath,
        http_1.HttpMethod.GET
      );
      requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
      if (limit !== undefined) {
        requestContext.setQueryParam(
          'limit',
          ObjectSerializer_1.ObjectSerializer.serialize(limit, 'number', '')
        );
      }
      if (page !== undefined) {
        requestContext.setQueryParam(
          'page',
          ObjectSerializer_1.ObjectSerializer.serialize(page, 'number', '')
        );
      }
      if (sort !== undefined) {
        requestContext.setQueryParam(
          'sort',
          ObjectSerializer_1.ObjectSerializer.serialize(sort, 'any', '')
        );
      }
      if (expand !== undefined) {
        requestContext.setQueryParam(
          'expand',
          ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', '')
        );
      }
      requestContext.setHeaderParam(
        'Prism-Account',
        ObjectSerializer_1.ObjectSerializer.serialize(prismAccount, 'string', '')
      );
      const defaultAuth =
        ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null ||
        _a === void 0
          ? void 0
          : _a.default) ||
        ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) ===
          null || _c === void 0
          ? void 0
          : _c.default);
      if (
        defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication
      ) {
        yield defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication(requestContext);
      }
      return requestContext;
    });
  }
  retrieve(webhookId, expand, prismAccount, _options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      let _config = _options || this.configuration;
      if (webhookId === null || webhookId === undefined) {
        throw new baseapi_1.RequiredError('WebhooksApi', 'retrieve', 'webhookId');
      }
      const localVarPath = '/webhooks/{webhookId}'.replace(
        '{' + 'webhookId' + '}',
        encodeURIComponent(String(webhookId))
      );
      const requestContext = _config.baseServer.makeRequestContext(
        localVarPath,
        http_1.HttpMethod.GET
      );
      requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
      if (expand !== undefined) {
        requestContext.setQueryParam(
          'expand',
          ObjectSerializer_1.ObjectSerializer.serialize(expand, 'string', '')
        );
      }
      requestContext.setHeaderParam(
        'Prism-Account',
        ObjectSerializer_1.ObjectSerializer.serialize(prismAccount, 'string', '')
      );
      const defaultAuth =
        ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null ||
        _a === void 0
          ? void 0
          : _a.default) ||
        ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) ===
          null || _c === void 0
          ? void 0
          : _c.default);
      if (
        defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication
      ) {
        yield defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication(requestContext);
      }
      return requestContext;
    });
  }
  update(webhookId, prismAccount, _options) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function* () {
      let _config = _options || this.configuration;
      if (webhookId === null || webhookId === undefined) {
        throw new baseapi_1.RequiredError('WebhooksApi', 'update', 'webhookId');
      }
      const localVarPath = '/webhooks/{webhookId}'.replace(
        '{' + 'webhookId' + '}',
        encodeURIComponent(String(webhookId))
      );
      const requestContext = _config.baseServer.makeRequestContext(
        localVarPath,
        http_1.HttpMethod.PATCH
      );
      requestContext.setHeaderParam('Accept', 'application/json, */*;q=0.8');
      requestContext.setHeaderParam(
        'Prism-Account',
        ObjectSerializer_1.ObjectSerializer.serialize(prismAccount, 'string', '')
      );
      const defaultAuth =
        ((_a = _options === null || _options === void 0 ? void 0 : _options.authMethods) === null ||
        _a === void 0
          ? void 0
          : _a.default) ||
        ((_c = (_b = this.configuration) === null || _b === void 0 ? void 0 : _b.authMethods) ===
          null || _c === void 0
          ? void 0
          : _c.default);
      if (
        defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication
      ) {
        yield defaultAuth === null || defaultAuth === void 0
          ? void 0
          : defaultAuth.applySecurityAuthentication(requestContext);
      }
      return requestContext;
    });
  }
}
exports.WebhooksApiRequestFactory = WebhooksApiRequestFactory;
class WebhooksApiResponseProcessor {
  _delete(response) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(
        response.headers['content-type']
      );
      if (util_1.isCodeInRange('200', response.httpStatusCode)) {
        return;
      }
      if (util_1.isCodeInRange('404', response.httpStatusCode)) {
        throw new exception_1.ApiException(
          response.httpStatusCode,
          'Not Found',
          undefined,
          response.headers
        );
      }
      if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'void',
          ''
        );
        return body;
      }
      throw new exception_1.ApiException(
        response.httpStatusCode,
        'Unknown API Status Code!',
        yield response.getBodyAsAny(),
        response.headers
      );
    });
  }
  create(response) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(
        response.headers['content-type']
      );
      if (util_1.isCodeInRange('200', response.httpStatusCode)) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'Webhook',
          ''
        );
        return body;
      }
      if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'Webhook',
          ''
        );
        return body;
      }
      throw new exception_1.ApiException(
        response.httpStatusCode,
        'Unknown API Status Code!',
        yield response.getBodyAsAny(),
        response.headers
      );
    });
  }
  list(response) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(
        response.headers['content-type']
      );
      if (util_1.isCodeInRange('200', response.httpStatusCode)) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'InlineResponse2007',
          ''
        );
        return body;
      }
      if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'InlineResponse2007',
          ''
        );
        return body;
      }
      throw new exception_1.ApiException(
        response.httpStatusCode,
        'Unknown API Status Code!',
        yield response.getBodyAsAny(),
        response.headers
      );
    });
  }
  retrieve(response) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(
        response.headers['content-type']
      );
      if (util_1.isCodeInRange('200', response.httpStatusCode)) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'Webhook',
          ''
        );
        return body;
      }
      if (util_1.isCodeInRange('404', response.httpStatusCode)) {
        throw new exception_1.ApiException(
          response.httpStatusCode,
          'Not Found',
          undefined,
          response.headers
        );
      }
      if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'Webhook',
          ''
        );
        return body;
      }
      throw new exception_1.ApiException(
        response.httpStatusCode,
        'Unknown API Status Code!',
        yield response.getBodyAsAny(),
        response.headers
      );
    });
  }
  update(response) {
    return __awaiter(this, void 0, void 0, function* () {
      const contentType = ObjectSerializer_1.ObjectSerializer.normalizeMediaType(
        response.headers['content-type']
      );
      if (util_1.isCodeInRange('200', response.httpStatusCode)) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'Webhook',
          ''
        );
        return body;
      }
      if (util_1.isCodeInRange('400', response.httpStatusCode)) {
        throw new exception_1.ApiException(
          response.httpStatusCode,
          'Bad Request',
          undefined,
          response.headers
        );
      }
      if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        const body = ObjectSerializer_1.ObjectSerializer.deserialize(
          ObjectSerializer_1.ObjectSerializer.parse(yield response.body.text(), contentType),
          'Webhook',
          ''
        );
        return body;
      }
      throw new exception_1.ApiException(
        response.httpStatusCode,
        'Unknown API Status Code!',
        yield response.getBodyAsAny(),
        response.headers
      );
    });
  }
}
exports.WebhooksApiResponseProcessor = WebhooksApiResponseProcessor;
//# sourceMappingURL=WebhooksApi.js.map