import { Resource } from './resource';
import { Error } from './error';
export interface ResponseRoot {
    data?: Resource[];
    errors?: Error[];
    href?: string;
    meta?: ResponseRoot.Meta;
    next?: string;
    results?: ResponseRoot.Results;
}
declare namespace ResponseRoot {
    interface Meta {
        total?: number;
    }
    interface Results {
    }
}
export {};
