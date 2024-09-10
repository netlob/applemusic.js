import { Resource } from './resource';
import { Artwork } from './artwork';
import { ContentRating } from './contentRating';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
import { Preview } from './preview';
import { AlbumRelationship } from './albumRelationship';
import { ArtistRelationship } from './artistRelationship';
import { GenreRelationship } from './genreRelationship';
import { StationRelationship } from './stationRelationship';
import { ComposerRelationship } from './composerRelationship';
import { LibraryRelationship } from './libraryRelationship';
import { MusicVideoRelationship } from './musicVideoRelationship';
export interface Song extends Resource {
    attributes?: Song.Attributes;
    relationships?: Song.Relationships;
    type: 'songs';
}
declare namespace Song {
    interface Attributes {
        albumName: string;
        artistName: string;
        artistUrl?: string;
        artwork: Artwork;
        attribution?: string;
        audioVariants?: string[];
        composerName?: string;
        contentRating?: ContentRating;
        discNumber: number;
        durationInMillis?: number;
        editorialNotes?: EditorialNotes;
        genreNames: string[];
        hasLyrics: boolean;
        isAppleDigitalMaster: boolean;
        isrc: string;
        movementCount?: number;
        movementName?: string;
        movementNumber?: number;
        name: string;
        playParams?: PlayParameters;
        previews: Preview[];
        releaseDate: string;
        trackNumber: number;
        url: string;
        workName?: string;
    }
    interface Relationships {
        albums?: AlbumRelationship;
        artists?: ArtistRelationship;
        composers?: ComposerRelationship;
        genres?: GenreRelationship;
        library?: LibraryRelationship;
        'music-videos'?: MusicVideoRelationship;
        station?: StationRelationship;
    }
}
export {};
