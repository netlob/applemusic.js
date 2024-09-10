"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogManager = void 0;
const Manager_1 = require("../Manager");
class CatalogManager extends Manager_1.Manager {
    constructor(client, 
    // eslint-disable-next-line no-unused-vars
    entity) {
        super(client);
        this.entity = entity;
    }
    async get(id, options = {}) {
        const query = (0, Manager_1.buildQuery)(this.http.config, options);
        const storefront = (0, Manager_1.getStorefrontOrThrow)(this.http.config, options);
        const url = this.http.getURL(`/v1/catalog/${storefront}/${this.entity}/${id}`, query);
        const response = await this.http.get(url);
        return (0, Manager_1.extractResponseData)(response);
    }
    async getMany(options = {}) {
        const query = (0, Manager_1.buildQuery)(this.http.config, options);
        const storefront = (0, Manager_1.getStorefrontOrThrow)(this.http.config, options);
        const url = this.http.getURL(`/v1/catalog/${storefront}/${this.entity}`, query);
        const response = await this.http.get(url);
        return (0, Manager_1.extractResponseData)(response);
    }
}
exports.CatalogManager = CatalogManager;
//# sourceMappingURL=CatalogManager.js.map