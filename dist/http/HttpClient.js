"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
/* eslint-disable no-console */
const axios_1 = __importDefault(require("axios"));
const https = __importStar(require("https"));
const axios_better_stacktrace_1 = __importDefault(require("axios-better-stacktrace"));
const errors_1 = require("../errors");
const sleep_1 = require("../util/sleep");
const json_1 = require("../util/json");
class HttpClient {
    constructor(config) {
        this.config = config;
        this.baseURL = 'https://api.music.apple.com';
        this.client = this.createClient();
        if (config.http?.baseURL) {
            this.baseURL = config.http.baseURL;
        }
    }
    /**
     * @param {string} pathname
     * @param {URLSearchParams} query
     * @returns {string} Returns the full url.
     */
    getURL(pathname, query) {
        const url = new URL(this.baseURL);
        url.pathname = pathname;
        url.search = query.toString();
        return url.toString();
    }
    /**
     * Create an axios instance, set interceptors, handle errors & auth.
     */
    createClient() {
        const config = {
            proxy: this.config.http?.proxy,
            headers: {
                ...this.config.http?.headers,
                Origin: 'https://music.apple.com',
                'User-Agent': this.config.http?.userAgent ??
                    '@statsfm/applemusic.js (https://github.com/statsfm/applemusic.js)',
                'Media-User-Token': this.config.mediaUserToken ?? ''
            },
            // https://github.com/axios/axios/blob/v0.20.0-0/lib/defaults.js#L57-L65
            transformResponse: [
                (value) => {
                    if (typeof value !== 'string') {
                        return value;
                    }
                    try {
                        return (0, json_1.parseWithDates)(value);
                    }
                    catch (e) {
                        return value;
                    }
                }
            ],
            validateStatus: () => true // Handle errors by ourselves
        };
        if (this.config.http?.localAddress) {
            config.transport = {
                ...https,
                request: (options, callback) => https.request({
                    ...options,
                    localAddress: this.config.http?.localAddress,
                    family: this.config.http?.localAddress.includes(':') ? 6 : 4
                }, callback)
            };
        }
        const client = axios_1.default.create(config);
        (0, axios_better_stacktrace_1.default)(client);
        client.interceptors.request.use((config) => {
            config.headers.Authorization = `Bearer ${this.config.developerToken}`;
            return config;
        });
        // error handling interceptor
        client.interceptors.response.use((response) => response, (err) => this.handleError(client, err));
        return client;
    }
    async handleError(client, err) {
        if (axios_1.default.isCancel(err) || axios_1.default.isAxiosError(err) === false || !this.shouldRetryRequest(err)) {
            return await Promise.reject(this.extractResponseError(err));
        }
        const requestConfig = err.config;
        requestConfig.retryAttempt || (requestConfig.retryAttempt = 0);
        const isRateLimited = err.response && err.response.status === 429;
        if (isRateLimited) {
            if (this.config.logRetry) {
                console.log(err.response);
            }
            const retryAfter = Number(err.response.headers['retry-after']) || 0;
            if (this.config.logRetry || this.config.logRetry === undefined) {
                console.error(`Hit ratelimit, retrying in ${retryAfter} second(s), path: ${err.request.path}`);
            }
            await (0, sleep_1.sleep)(retryAfter * 1000);
            requestConfig.retryAttempt = 0;
        }
        else {
            await (0, sleep_1.sleep)(1000);
            requestConfig.retryAttempt += 1;
            if (this.config.debug) {
                console.log(`(${requestConfig.retryAttempt}/${this.maxRetryAttempts}) retry ${requestConfig.url} - ${err}`);
            }
        }
        return await client.request(requestConfig);
    }
    shouldRetryRequest(err) {
        // non-response errors should clarified as 5xx and retried (socket hangup, ECONNRESET, etc.)
        if (!err.response) {
            if (this.config.retry5xx === false) {
                return false;
            }
            const { retryAttempt = 0 } = err.config;
            return retryAttempt < this.maxRetryAttempts;
        }
        const { status } = err.response;
        if (status === 429) {
            return this.config.retry !== false;
        }
        if (status >= 500 && status < 600) {
            if (this.config.retry5xx === false) {
                return false;
            }
            const { retryAttempt = 0 } = err.config;
            return retryAttempt < this.maxRetryAttempts;
        }
        return false;
    }
    extractResponseError(err) {
        if (axios_1.default.isCancel(err) || axios_1.default.isAxiosError(err) === false) {
            return err;
        }
        // non-response errors should clarified as 5xx and retried (socket hangup, ECONNRESET, etc.)
        if (!err.response) {
            const { retryAttempt = 0 } = err.config;
            if (this.config.retry5xx === false || retryAttempt < this.maxRetryAttempts) {
                return err;
            }
            return new errors_1.RequestRetriesExceededError(`Request max ${this.maxRetryAttempts} retry attempts exceeded`, err.config.url, err.stack);
        }
        const { stack, config, response } = err;
        const { status, headers, data } = response;
        if (status >= 500 && status < 600) {
            const { retryAttempt } = err.config;
            if (this.config.retry5xx === false || retryAttempt < this.maxRetryAttempts) {
                return err;
            }
            return new errors_1.RequestRetriesExceededError(`Request ${this.maxRetryAttempts} retry attempts exceeded`, err.config.url, err.stack);
        }
        switch (status) {
            case 400:
                return new errors_1.BadRequestError(config.url, {
                    stack,
                    data
                });
            case 401:
                return new errors_1.UnauthorizedError(config.url, {
                    stack,
                    data
                });
            case 403:
                return new errors_1.ForbiddenError(config.url, {
                    stack,
                    data
                });
            case 404:
                throw new errors_1.NotFoundError(config.url, stack);
            case 429:
                return new errors_1.RatelimitError(`Hit ratelimit, retry after ${headers['retry-after']} seconds`, err.config.url, {
                    stack,
                    data
                });
        }
        return err;
    }
    get maxRetryAttempts() {
        return this.config.retry5xxAmount ?? 3;
    }
    get(url, config) {
        return this.client.get(url, config);
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=HttpClient.js.map