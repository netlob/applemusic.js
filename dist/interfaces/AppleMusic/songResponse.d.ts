import { ResponseRoot } from './responseRoot';
import { Song } from './song';
export interface SongResponse extends ResponseRoot {
    data: Song[];
}
