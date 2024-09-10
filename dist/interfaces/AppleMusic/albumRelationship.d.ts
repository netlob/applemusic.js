import { Relationship } from './relationship';
import { Album } from './album';
export interface AlbumRelationship extends Relationship {
    data: Album[];
}
