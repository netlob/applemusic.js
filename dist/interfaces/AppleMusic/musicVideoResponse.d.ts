import { ResponseRoot } from './responseRoot';
import { MusicVideo } from './musicVideo';
export interface MusicVideoResponse extends ResponseRoot {
    data: MusicVideo[];
}
