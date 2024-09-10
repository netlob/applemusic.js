import type { AxiosResponse } from 'axios';
import { HttpClient } from './http/HttpClient';
import type { ClientConfiguration } from './interfaces/Config';
import type { ResponseRoot } from './interfaces/AppleMusic/responseRoot';
type SearchType = 'songs' | 'artists' | 'albums' | 'playlists';
export interface Options {
    storefront: string;
    languageTag: string;
    searchTypes: SearchType[];
    query: URLSearchParams;
}
export declare function getStorefrontOrThrow(config: ClientConfiguration, options: Partial<Options>): string;
export declare function buildQuery(config: ClientConfiguration, options: Partial<Options>): URLSearchParams;
export declare function extractResponseData<T extends ResponseRoot>(response: AxiosResponse<T>): T;
export declare abstract class Manager<T> {
    protected readonly http: HttpClient;
    constructor(http: HttpClient);
    abstract get(id: string, options: Partial<Options>): Promise<T>;
    abstract getMany(options: Partial<Options>): Promise<T>;
}
export {};
