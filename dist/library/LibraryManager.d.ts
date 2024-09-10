import { HttpClient } from '../http/HttpClient';
import { ResponseRoot } from '../interfaces/AppleMusic';
import { Manager, Options } from '../Manager';
export declare class LibraryManager<T extends ResponseRoot> extends Manager<T> {
    private readonly entity;
    constructor(client: HttpClient, entity: string);
    get(id: string, options?: Partial<Options>): Promise<T>;
    getMany(options?: Partial<Options>): Promise<T>;
}
