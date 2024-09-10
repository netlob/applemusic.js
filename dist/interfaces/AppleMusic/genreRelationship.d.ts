import { Relationship } from './relationship';
import { Genre } from './genre';
export interface GenreRelationship extends Relationship {
    data: Genre[];
}
