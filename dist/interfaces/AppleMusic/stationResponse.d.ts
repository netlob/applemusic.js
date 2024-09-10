import { ResponseRoot } from './responseRoot';
import { Station } from './station';
export interface StationResponse extends ResponseRoot {
    data: Station[];
}
