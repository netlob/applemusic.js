import { Resource } from './resource';
import { Artwork } from './artwork';
import { ContentRating } from './contentRating';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
import { Preview } from './preview';
import { AlbumRelationship } from './albumRelationship';
import { ArtistRelationship } from './artistRelationship';
import { GenreRelationship } from './genreRelationship';
import { LibraryRelationship } from './libraryRelationship';
import { SongRelationship } from './songRelationship';
export interface MusicVideo extends Resource {
    attributes?: MusicVideo.Attributes;
    relationships?: MusicVideo.Relationships;
    type: 'musicVideos';
}
declare namespace MusicVideo {
    interface Attributes {
        albumName?: string;
        artistName: string;
        artistUrl?: string;
        artwork: Artwork;
        contentRating?: ContentRating;
        durationInMillis?: number;
        editorialNotes?: EditorialNotes;
        genreNames: string[];
        has4K: boolean;
        hasHDR: boolean;
        isrc: string;
        name: string;
        playParams?: PlayParameters;
        previews: Preview[];
        releaseDate: string;
        trackNumber?: number;
        url: string;
        videoSubType?: string;
        workId?: string;
        workName?: string;
    }
    interface Relationships {
        albums?: AlbumRelationship;
        artists?: ArtistRelationship;
        genres?: GenreRelationship;
        library?: LibraryRelationship;
        songs?: SongRelationship;
    }
}
export {};
