import { AxiosInstance, AxiosPromise, AxiosRequestConfig } from 'axios';
import { ClientConfiguration } from '../interfaces/Config';
export declare class HttpClient {
    readonly config: ClientConfiguration;
    protected baseURL: string;
    protected client: AxiosInstance;
    constructor(config: ClientConfiguration);
    /**
     * @param {string} pathname
     * @param {URLSearchParams} query
     * @returns {string} Returns the full url.
     */
    getURL(pathname: string, query: URLSearchParams): string;
    /**
     * Create an axios instance, set interceptors, handle errors & auth.
     */
    private createClient;
    private handleError;
    private shouldRetryRequest;
    private extractResponseError;
    private get maxRetryAttempts();
    get<T>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>;
}
