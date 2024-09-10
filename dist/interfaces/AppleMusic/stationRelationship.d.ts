import { Relationship } from './relationship';
import { Station } from './station';
export interface StationRelationship extends Relationship {
    data: Station[];
}
