/* tslint:disable */
/* eslint-disable */
/*
Terminal API

Terminal is a unified API that makes it easy to integrate with the leading telematics service providers.

Contact Support:
 Name: Terminal
 Email: connect@withterminal.com

The version of the OpenAPI document: 1.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DriversApi - axios parameter creator
 * @export
 */
export const DriversApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the details of a specific driver
         * @summary Get Driver
         * @param {string} id (Required) 
         * @param {string} [raw] Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.
         * @param {string} [expand] Expand resources in the returned response
         * @param {string} [connectionToken] (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails: async (id: string, raw?: string, expand?: string, connectionToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDetails', 'id', id)
            const localVarPath = `/drivers/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (raw !== undefined) {
                localVarQueryParameter['raw'] = raw;
            }

            if (expand !== undefined) {
                localVarQueryParameter['expand'] = expand;
            }

            if (connectionToken != null) {
                localVarHeaderParameter['connection-token'] = String(connectionToken);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/drivers/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all of the drivers in the connected account
         * @summary List Drivers
         * @param {string} [cursor] Pagination cursor to start requests from
         * @param {string} [limit] The maximum number of results to return in a page.
         * @param {string} [modifiedAfter] Only include records that were last modified after a provided date.
         * @param {string} [modifiedBefore] Only include records that were last modified before a provided date.
         * @param {string} [raw] Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.
         * @param {string} [expand] Expand resources in the returned response
         * @param {string} [connectionToken] (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (cursor?: string, limit?: string, modifiedAfter?: string, modifiedBefore?: string, raw?: string, expand?: string, connectionToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/drivers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (modifiedAfter !== undefined) {
                localVarQueryParameter['modifiedAfter'] = modifiedAfter;
            }

            if (modifiedBefore !== undefined) {
                localVarQueryParameter['modifiedBefore'] = modifiedBefore;
            }

            if (raw !== undefined) {
                localVarQueryParameter['raw'] = raw;
            }

            if (expand !== undefined) {
                localVarQueryParameter['expand'] = expand;
            }

            if (connectionToken != null) {
                localVarHeaderParameter['connection-token'] = String(connectionToken);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/drivers',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DriversApi - functional programming interface
 * @export
 */
export const DriversApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DriversApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the details of a specific driver
         * @summary Get Driver
         * @param {DriversApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDetails(requestParameters: DriversApiGetDetailsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDetails(requestParameters.id, requestParameters.raw, requestParameters.expand, requestParameters.connectionToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all of the drivers in the connected account
         * @summary List Drivers
         * @param {DriversApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: DriversApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.cursor, requestParameters.limit, requestParameters.modifiedAfter, requestParameters.modifiedBefore, requestParameters.raw, requestParameters.expand, requestParameters.connectionToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DriversApi - factory interface
 * @export
 */
export const DriversApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DriversApiFp(configuration)
    return {
        /**
         * Get the details of a specific driver
         * @summary Get Driver
         * @param {DriversApiGetDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDetails(requestParameters: DriversApiGetDetailsRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List all of the drivers in the connected account
         * @summary List Drivers
         * @param {DriversApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: DriversApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDetails operation in DriversApi.
 * @export
 * @interface DriversApiGetDetailsRequest
 */
export type DriversApiGetDetailsRequest = {
    
    /**
    * (Required) 
    * @type {string}
    * @memberof DriversApiGetDetails
    */
    readonly id: string
    
    /**
    * Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.
    * @type {string}
    * @memberof DriversApiGetDetails
    */
    readonly raw?: string
    
    /**
    * Expand resources in the returned response
    * @type {string}
    * @memberof DriversApiGetDetails
    */
    readonly expand?: string
    
    /**
    * (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
    * @type {string}
    * @memberof DriversApiGetDetails
    */
    readonly connectionToken?: string
    
}

/**
 * Request parameters for list operation in DriversApi.
 * @export
 * @interface DriversApiListRequest
 */
export type DriversApiListRequest = {
    
    /**
    * Pagination cursor to start requests from
    * @type {string}
    * @memberof DriversApiList
    */
    readonly cursor?: string
    
    /**
    * The maximum number of results to return in a page.
    * @type {string}
    * @memberof DriversApiList
    */
    readonly limit?: string
    
    /**
    * Only include records that were last modified after a provided date.
    * @type {string}
    * @memberof DriversApiList
    */
    readonly modifiedAfter?: string
    
    /**
    * Only include records that were last modified before a provided date.
    * @type {string}
    * @memberof DriversApiList
    */
    readonly modifiedBefore?: string
    
    /**
    * Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.
    * @type {string}
    * @memberof DriversApiList
    */
    readonly raw?: string
    
    /**
    * Expand resources in the returned response
    * @type {string}
    * @memberof DriversApiList
    */
    readonly expand?: string
    
    /**
    * (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
    * @type {string}
    * @memberof DriversApiList
    */
    readonly connectionToken?: string
    
}

/**
 * DriversApiGenerated - object-oriented interface
 * @export
 * @class DriversApiGenerated
 * @extends {BaseAPI}
 */
export class DriversApiGenerated extends BaseAPI {
    /**
     * Get the details of a specific driver
     * @summary Get Driver
     * @param {DriversApiGetDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DriversApiGenerated
     */
    public getDetails(requestParameters: DriversApiGetDetailsRequest, options?: AxiosRequestConfig) {
        return DriversApiFp(this.configuration).getDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all of the drivers in the connected account
     * @summary List Drivers
     * @param {DriversApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DriversApiGenerated
     */
    public list(requestParameters: DriversApiListRequest = {}, options?: AxiosRequestConfig) {
        return DriversApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
