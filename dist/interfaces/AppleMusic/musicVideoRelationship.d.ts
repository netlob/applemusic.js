import { Relationship } from './relationship';
import { MusicVideo } from './musicVideo';
export interface MusicVideoRelationship extends Relationship {
    data: MusicVideo[];
}
