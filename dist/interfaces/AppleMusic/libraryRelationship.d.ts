import { Relationship } from './relationship';
import { Song } from './song';
export interface LibraryRelationship extends Relationship {
    data: Song[];
}
