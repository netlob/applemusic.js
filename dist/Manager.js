"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manager = void 0;
exports.getStorefrontOrThrow = getStorefrontOrThrow;
exports.buildQuery = buildQuery;
exports.extractResponseData = extractResponseData;
const AppleMusicError_1 = require("./AppleMusicError");
function getStorefrontOrThrow(config, options) {
    const result = options.storefront ?? config.defaultStorefront;
    if (result) {
        return result;
    }
    throw new Error('Please specify storefront value using method options or set default using constructor options');
}
function buildQuery(config, options) {
    const query = new URLSearchParams(options.query);
    const lang = options.languageTag ?? config.defaultLanguageTag;
    if (lang) {
        query.set('l', lang);
    }
    return query;
}
function extractResponseData(response) {
    const { status, data, config } = response;
    if (!data) {
        throw new AppleMusicError_1.AppleMusicError(`Request to ${config.url} failed with status code ${status}`, status);
    }
    // https://developer.apple.com/documentation/applemusicapi/handling_requests_and_responses#3001632
    if (data.errors) {
        const [error] = data.errors;
        throw new AppleMusicError_1.AppleMusicError(error.title, status, data);
    }
    return data;
}
class Manager {
    // eslint-disable-next-line no-unused-vars
    constructor(http) {
        this.http = http;
    }
}
exports.Manager = Manager;
//# sourceMappingURL=Manager.js.map