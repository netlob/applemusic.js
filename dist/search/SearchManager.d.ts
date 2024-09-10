import { HttpClient } from '../http/HttpClient';
import { ResponseRoot } from '../interfaces/AppleMusic';
import { Manager, Options } from '../Manager';
export declare class SearchManager<T extends ResponseRoot> extends Manager<T> {
    constructor(client: HttpClient);
    get(term: string, options?: Partial<Options>): Promise<T>;
    getMany(_options?: Partial<Options>): Promise<T>;
}
