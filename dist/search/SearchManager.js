"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchManager = void 0;
const Manager_1 = require("../Manager");
class SearchManager extends Manager_1.Manager {
    constructor(client) {
        super(client);
    }
    async get(term, options = {}) {
        const query = (0, Manager_1.buildQuery)(this.http.config, options);
        if (options.searchTypes) {
            query.set('types', options.searchTypes.join(','));
        }
        query.set('term', term);
        const storefront = (0, Manager_1.getStorefrontOrThrow)(this.http.config, options);
        const url = this.http.getURL(`/v1/catalog/${storefront}/search`, query);
        const response = await this.http.get(url);
        return (0, Manager_1.extractResponseData)(response);
    }
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    getMany(_options = {}) {
        throw new Error('Method not implemented');
    }
}
exports.SearchManager = SearchManager;
//# sourceMappingURL=SearchManager.js.map