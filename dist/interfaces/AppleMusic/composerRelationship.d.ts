import { Relationship } from './relationship';
import { Artist } from './artist';
export interface ComposerRelationship extends Relationship {
    data: Artist[];
}
