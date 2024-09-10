import { Relationship } from './relationship';
import { Artist } from './artist';
export interface ArtistRelationship extends Relationship {
    data: Artist[];
}
