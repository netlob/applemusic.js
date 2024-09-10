import { Song } from './song';
import { MusicVideo } from './musicVideo';
export interface TrackRelationship {
    data: Song | MusicVideo;
}
