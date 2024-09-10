import { Resource } from './resource';
import { Artwork } from './artwork';
import { ContentRating } from './contentRating';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
import { ArtistRelationship } from './artistRelationship';
import { GenreRelationship } from './genreRelationship';
import { TrackRelationship } from './trackRelationship';
import { LibraryRelationship } from './libraryRelationship';
import { RecordLabelRelationship } from './recordLabelRelationship';
export interface Album extends Resource {
    attributes?: Album.Attributes;
    relationships?: Album.Relationships;
    type: 'albums';
}
declare namespace Album {
    interface Attributes {
        albumName: string;
        artistName: string;
        artistUrl?: string;
        artwork?: Artwork;
        audioVariants?: string[];
        contentRating?: ContentRating;
        copyright?: string;
        editorialNotes?: EditorialNotes;
        genreNames: string[];
        isCompilation: boolean;
        isComplete: boolean;
        isMasteredForItunes: boolean;
        isSingle: boolean;
        name: string;
        playParams?: PlayParameters;
        recordLabel: string;
        releaseDate?: string;
        trackCount: number;
        upc?: string;
        url: string;
    }
    interface Relationships {
        artists?: ArtistRelationship;
        genres?: GenreRelationship;
        tracks?: TrackRelationship;
        library?: LibraryRelationship;
        'record-labels'?: RecordLabelRelationship;
    }
}
export {};
