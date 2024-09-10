import { AlbumResponse } from './albumResponse';
import { ArtistResponse } from './artistResponse';
import { MusicVideoResponse } from './musicVideoResponse';
import { PlaylistResponse } from './playlistResponse';
import { ResponseRoot } from './responseRoot';
import { SongResponse } from './songResponse';
export interface SearchResponse extends ResponseRoot {
    results: {
        activities?: unknown;
        albums?: AlbumResponse;
        'apple-curators'?: unknown;
        artists?: ArtistResponse;
        curators?: unknown;
        'music-videos'?: MusicVideoResponse;
        playlists?: PlaylistResponse;
        'record-labels'?: unknown;
        songs?: SongResponse;
        stations?: unknown;
        top?: unknown;
    };
}
