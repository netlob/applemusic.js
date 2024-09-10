import type { ResponseRoot } from './interfaces/AppleMusic/responseRoot';
export declare class AppleMusicError extends Error {
    httpStatusCode: number;
    response?: ResponseRoot;
    constructor(message: string, httpStatusCode: number, response?: ResponseRoot);
}
