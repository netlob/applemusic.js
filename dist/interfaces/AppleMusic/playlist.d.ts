import { Resource } from './resource';
import { Artwork } from './artwork';
import { EditorialNotes } from './editorialNotes';
import { PlayParameters } from './playParameters';
import { CuratorRelationship } from './curatorRelationship';
import { TrackRelationship } from './trackRelationship';
import { LibraryRelationship } from './libraryRelationship';
export interface Playlist extends Resource {
    attributes?: Playlist.Attributes;
    relationships?: Playlist.Relationships;
    type: 'playlists';
}
declare namespace Playlist {
    interface Attributes {
        artwork?: Artwork;
        curatorName: string;
        description?: EditorialNotes;
        isChart: boolean;
        lastModifiedDate: string;
        name: string;
        playParams?: PlayParameters;
        playlistType: 'user-shared' | 'editorial' | 'external' | 'personal-mix' | 'replay';
        url: string;
        trackTypes?: string[];
    }
    interface Relationships {
        curator?: CuratorRelationship;
        library?: LibraryRelationship;
        tracks?: TrackRelationship;
    }
}
export {};
