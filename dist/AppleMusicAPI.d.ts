import { ClientConfiguration } from './interfaces/Config';
import type { AlbumResponse } from './interfaces/AppleMusic/albumResponse';
import type { ArtistResponse } from './interfaces/AppleMusic/artistResponse';
import type { MusicVideoResponse } from './interfaces/AppleMusic/musicVideoResponse';
import type { PlaylistResponse } from './interfaces/AppleMusic/playlistResponse';
import type { SongResponse } from './interfaces/AppleMusic/songResponse';
import type { StationResponse } from './interfaces/AppleMusic/stationResponse';
import type { SearchResponse } from './interfaces/AppleMusic/searchResponse';
import { CatalogManager } from './catalog/CatalogManager';
import { SearchManager } from './search/SearchManager';
import { LibraryManager } from './library/LibraryManager';
export declare class AppleMusicAPI {
    configuration: Readonly<ClientConfiguration>;
    albums: CatalogManager<AlbumResponse>;
    artists: CatalogManager<ArtistResponse>;
    musicVideos: CatalogManager<MusicVideoResponse>;
    playlists: CatalogManager<PlaylistResponse>;
    songs: CatalogManager<SongResponse>;
    stations: CatalogManager<StationResponse>;
    search: SearchManager<SearchResponse>;
    library: {
        songs: LibraryManager<SongResponse>;
        playlists: LibraryManager<PlaylistResponse>;
    };
    constructor(configuration: Readonly<ClientConfiguration>);
}
