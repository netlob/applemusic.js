import { Resource } from './resource';
export interface Genre extends Resource {
    attributes?: Genre.Attributes;
    type: 'genres';
}
declare namespace Genre {
    interface Attributes {
        name: string;
        parentId?: string;
        parentName?: string;
        chartLabel?: string;
    }
}
export {};
