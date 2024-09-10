import { Resource } from './resource';
import { EditorialNotes } from './editorialNotes';
import { AlbumRelationship } from './albumRelationship';
import { GenreRelationship } from './genreRelationship';
import { MusicVideoRelationship } from './musicVideoRelationship';
import { PlaylistRelationship } from './playlistRelationship';
import { StationRelationship } from './stationRelationship';
import { Artwork } from './artwork';
export interface Artist extends Resource {
    attributes?: Artist.Attributes;
    relationships?: Artist.Relationships;
    type: 'artists';
}
declare namespace Artist {
    interface Attributes {
        artwork?: Artwork;
        editorialNotes?: EditorialNotes;
        genreNames: string[];
        name: string;
        url: string;
    }
    interface Relationships {
        albums?: AlbumRelationship;
        genres?: GenreRelationship;
        'music-videos'?: MusicVideoRelationship;
        playlists?: PlaylistRelationship;
        station?: StationRelationship;
    }
}
export {};
