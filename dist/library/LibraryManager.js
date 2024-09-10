"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryManager = void 0;
const Manager_1 = require("../Manager");
class LibraryManager extends Manager_1.Manager {
    constructor(client, 
    // eslint-disable-next-line no-unused-vars
    entity) {
        super(client);
        this.entity = entity;
    }
    async get(id, options = {}) {
        const query = (0, Manager_1.buildQuery)(this.http.config, options);
        const url = this.http.getURL(`/v1/me/library/${this.entity}/${id}`, query);
        const response = await this.http.get(url);
        return (0, Manager_1.extractResponseData)(response);
    }
    async getMany(options = {}) {
        const query = (0, Manager_1.buildQuery)(this.http.config, options);
        const url = this.http.getURL(`/v1/me/library/${this.entity}`, query);
        const response = await this.http.get(url);
        return (0, Manager_1.extractResponseData)(response);
    }
}
exports.LibraryManager = LibraryManager;
//# sourceMappingURL=LibraryManager.js.map