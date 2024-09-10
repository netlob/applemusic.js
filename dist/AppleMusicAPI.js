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
        const client = new HttpClient_1.HttpClient(configuration);
        this.albums = new CatalogManager_1.CatalogManager(client, 'albums');
        this.artists = new CatalogManager_1.CatalogManager(client, 'artists');
        this.musicVideos = new CatalogManager_1.CatalogManager(client, 'music-videos');
        this.playlists = new CatalogManager_1.CatalogManager(client, 'playlists');
        this.songs = new CatalogManager_1.CatalogManager(client, 'songs');
        this.stations = new CatalogManager_1.CatalogManager(client, 'stations');
        this.search = new SearchManager_1.SearchManager(client);
        this.library = {
            songs: new LibraryManager_1.LibraryManager(client, 'songs'),
            playlists: new LibraryManager_1.LibraryManager(client, 'playlists')
        };
    }
}
exports.AppleMusicAPI = AppleMusicAPI;
//# sourceMappingURL=AppleMusicAPI.js.map