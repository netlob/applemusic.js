"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppleMusicAPI = void 0;
const HttpClient_1 = require("./http/HttpClient");
const CatalogManager_1 = require("./catalog/CatalogManager");
const SearchManager_1 = require("./search/SearchManager");
const LibraryManager_1 = require("./library/LibraryManager");
class AppleMusicAPI {
    constructor(configuration) {
        this.configuration = configuration;
        this._client = new HttpClient_1.HttpClient(configuration);
        this.albums = new CatalogManager_1.CatalogManager(this._client, 'albums');
        this.artists = new CatalogManager_1.CatalogManager(this._client, 'artists');
        this.musicVideos = new CatalogManager_1.CatalogManager(this._client, 'music-videos');
        this.playlists = new CatalogManager_1.CatalogManager(this._client, 'playlists');
        this.songs = new CatalogManager_1.CatalogManager(this._client, 'songs');
        this.stations = new CatalogManager_1.CatalogManager(this._client, 'stations');
        this.search = new SearchManager_1.SearchManager(this._client);
        this.library = {
            songs: new LibraryManager_1.LibraryManager(this._client, 'songs'),
            playlists: new LibraryManager_1.LibraryManager(this._client, 'playlists')
        };
    }
}
exports.AppleMusicAPI = AppleMusicAPI;
//# sourceMappingURL=AppleMusicAPI.js.map