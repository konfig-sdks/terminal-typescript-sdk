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
// @ts-ignore
import { DataManagementMakePassthroughRequestRequest } from '../models';
// @ts-ignore
import { DataManagementRequestSyncManualRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * DataManagementApi - axios parameter creator
 * @export
 */
export const DataManagementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the status of a sync job by ID.
         * @summary Get Sync Job Status
         * @param {string} id (Required) 
         * @param {string} [expand] Expand related resources in the response to reduce requests.
         * @param {string} [connectionToken] (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSyncStatus: async (id: string, expand?: string, connectionToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSyncStatus', 'id', id)
            const localVarPath = `/syncs/{id}`
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
                pathTemplate: '/syncs/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List a log of all batch sync jobs for the current connection.
         * @summary List Sync History
         * @param {string} [limit] The maximum number of results to return in a page.
         * @param {string} [cursor] Pagination cursor to start requests from
         * @param {string} [status] 
         * @param {string} [expand] Expand related resources in the response to reduce requests.
         * @param {string} [connectionToken] (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSyncHistory: async (limit?: string, cursor?: string, status?: string, expand?: string, connectionToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/syncs`;
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
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
                pathTemplate: '/syncs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Make an authenticated request to the underlying telematics provider.   This endpoint helps ensure that you are never limited by Terminal. You can use passthrough requests to access capabilities that may be limited to a specific TSP or not yet in the normalized model.  Our team is here an ready to support custom use cases that may need `/passthrough`
         * @summary Passthrough
         * @param {string} [connectionToken] (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
         * @param {DataManagementMakePassthroughRequestRequest} [dataManagementMakePassthroughRequestRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        makePassthroughRequest: async (connectionToken?: string, dataManagementMakePassthroughRequestRequest?: DataManagementMakePassthroughRequestRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/passthrough`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (connectionToken != null) {
                localVarHeaderParameter['connection-token'] = String(connectionToken);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: dataManagementMakePassthroughRequestRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/passthrough',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(dataManagementMakePassthroughRequestRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Manually request to sync the current connections data.  By default, Terminal will sync all connections where `syncMode = automatic` on a regular cadence. For customers that may not need a fleet\'s data to be kept up to date and want to reduce their active tracked trucks, you can set `syncMode = manual` and invoke this endpoint when you want to sync data.  If you\'re wondering if this is relevent to your use case then feel free to reach out and we\'d be happy to assist.
         * @summary Request Sync
         * @param {string} [connectionToken] (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
         * @param {DataManagementRequestSyncManualRequest} [dataManagementRequestSyncManualRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestSyncManual: async (connectionToken?: string, dataManagementRequestSyncManualRequest?: DataManagementRequestSyncManualRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/syncs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (connectionToken != null) {
                localVarHeaderParameter['connection-token'] = String(connectionToken);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: dataManagementRequestSyncManualRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/syncs',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(dataManagementRequestSyncManualRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DataManagementApi - functional programming interface
 * @export
 */
export const DataManagementApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DataManagementApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the status of a sync job by ID.
         * @summary Get Sync Job Status
         * @param {DataManagementApiGetSyncStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSyncStatus(requestParameters: DataManagementApiGetSyncStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSyncStatus(requestParameters.id, requestParameters.expand, requestParameters.connectionToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List a log of all batch sync jobs for the current connection.
         * @summary List Sync History
         * @param {DataManagementApiListSyncHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listSyncHistory(requestParameters: DataManagementApiListSyncHistoryRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listSyncHistory(requestParameters.limit, requestParameters.cursor, requestParameters.status, requestParameters.expand, requestParameters.connectionToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Make an authenticated request to the underlying telematics provider.   This endpoint helps ensure that you are never limited by Terminal. You can use passthrough requests to access capabilities that may be limited to a specific TSP or not yet in the normalized model.  Our team is here an ready to support custom use cases that may need `/passthrough`
         * @summary Passthrough
         * @param {DataManagementApiMakePassthroughRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async makePassthroughRequest(requestParameters: DataManagementApiMakePassthroughRequestRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const dataManagementMakePassthroughRequestRequest: DataManagementMakePassthroughRequestRequest = {
                body: requestParameters.body,
                headers: requestParameters.headers,
                method: requestParameters.method,
                path: requestParameters.path
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.makePassthroughRequest(requestParameters.connectionToken, dataManagementMakePassthroughRequestRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Manually request to sync the current connections data.  By default, Terminal will sync all connections where `syncMode = automatic` on a regular cadence. For customers that may not need a fleet\'s data to be kept up to date and want to reduce their active tracked trucks, you can set `syncMode = manual` and invoke this endpoint when you want to sync data.  If you\'re wondering if this is relevent to your use case then feel free to reach out and we\'d be happy to assist.
         * @summary Request Sync
         * @param {DataManagementApiRequestSyncManualRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async requestSyncManual(requestParameters: DataManagementApiRequestSyncManualRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const dataManagementRequestSyncManualRequest: DataManagementRequestSyncManualRequest = {
                days: requestParameters.days
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.requestSyncManual(requestParameters.connectionToken, dataManagementRequestSyncManualRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DataManagementApi - factory interface
 * @export
 */
export const DataManagementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DataManagementApiFp(configuration)
    return {
        /**
         * Get the status of a sync job by ID.
         * @summary Get Sync Job Status
         * @param {DataManagementApiGetSyncStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSyncStatus(requestParameters: DataManagementApiGetSyncStatusRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getSyncStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * List a log of all batch sync jobs for the current connection.
         * @summary List Sync History
         * @param {DataManagementApiListSyncHistoryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listSyncHistory(requestParameters: DataManagementApiListSyncHistoryRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.listSyncHistory(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Make an authenticated request to the underlying telematics provider.   This endpoint helps ensure that you are never limited by Terminal. You can use passthrough requests to access capabilities that may be limited to a specific TSP or not yet in the normalized model.  Our team is here an ready to support custom use cases that may need `/passthrough`
         * @summary Passthrough
         * @param {DataManagementApiMakePassthroughRequestRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        makePassthroughRequest(requestParameters: DataManagementApiMakePassthroughRequestRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.makePassthroughRequest(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Manually request to sync the current connections data.  By default, Terminal will sync all connections where `syncMode = automatic` on a regular cadence. For customers that may not need a fleet\'s data to be kept up to date and want to reduce their active tracked trucks, you can set `syncMode = manual` and invoke this endpoint when you want to sync data.  If you\'re wondering if this is relevent to your use case then feel free to reach out and we\'d be happy to assist.
         * @summary Request Sync
         * @param {DataManagementApiRequestSyncManualRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestSyncManual(requestParameters: DataManagementApiRequestSyncManualRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.requestSyncManual(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getSyncStatus operation in DataManagementApi.
 * @export
 * @interface DataManagementApiGetSyncStatusRequest
 */
export type DataManagementApiGetSyncStatusRequest = {
    
    /**
    * (Required) 
    * @type {string}
    * @memberof DataManagementApiGetSyncStatus
    */
    readonly id: string
    
    /**
    * Expand related resources in the response to reduce requests.
    * @type {string}
    * @memberof DataManagementApiGetSyncStatus
    */
    readonly expand?: string
    
    /**
    * (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
    * @type {string}
    * @memberof DataManagementApiGetSyncStatus
    */
    readonly connectionToken?: string
    
}

/**
 * Request parameters for listSyncHistory operation in DataManagementApi.
 * @export
 * @interface DataManagementApiListSyncHistoryRequest
 */
export type DataManagementApiListSyncHistoryRequest = {
    
    /**
    * The maximum number of results to return in a page.
    * @type {string}
    * @memberof DataManagementApiListSyncHistory
    */
    readonly limit?: string
    
    /**
    * Pagination cursor to start requests from
    * @type {string}
    * @memberof DataManagementApiListSyncHistory
    */
    readonly cursor?: string
    
    /**
    * 
    * @type {string}
    * @memberof DataManagementApiListSyncHistory
    */
    readonly status?: string
    
    /**
    * Expand related resources in the response to reduce requests.
    * @type {string}
    * @memberof DataManagementApiListSyncHistory
    */
    readonly expand?: string
    
    /**
    * (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
    * @type {string}
    * @memberof DataManagementApiListSyncHistory
    */
    readonly connectionToken?: string
    
}

/**
 * Request parameters for makePassthroughRequest operation in DataManagementApi.
 * @export
 * @interface DataManagementApiMakePassthroughRequestRequest
 */
export type DataManagementApiMakePassthroughRequestRequest = {
    
    /**
    * (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
    * @type {string}
    * @memberof DataManagementApiMakePassthroughRequest
    */
    readonly connectionToken?: string
    
} & DataManagementMakePassthroughRequestRequest

/**
 * Request parameters for requestSyncManual operation in DataManagementApi.
 * @export
 * @interface DataManagementApiRequestSyncManualRequest
 */
export type DataManagementApiRequestSyncManualRequest = {
    
    /**
    * (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
    * @type {string}
    * @memberof DataManagementApiRequestSyncManual
    */
    readonly connectionToken?: string
    
} & DataManagementRequestSyncManualRequest

/**
 * DataManagementApiGenerated - object-oriented interface
 * @export
 * @class DataManagementApiGenerated
 * @extends {BaseAPI}
 */
export class DataManagementApiGenerated extends BaseAPI {
    /**
     * Get the status of a sync job by ID.
     * @summary Get Sync Job Status
     * @param {DataManagementApiGetSyncStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataManagementApiGenerated
     */
    public getSyncStatus(requestParameters: DataManagementApiGetSyncStatusRequest, options?: AxiosRequestConfig) {
        return DataManagementApiFp(this.configuration).getSyncStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List a log of all batch sync jobs for the current connection.
     * @summary List Sync History
     * @param {DataManagementApiListSyncHistoryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataManagementApiGenerated
     */
    public listSyncHistory(requestParameters: DataManagementApiListSyncHistoryRequest = {}, options?: AxiosRequestConfig) {
        return DataManagementApiFp(this.configuration).listSyncHistory(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Make an authenticated request to the underlying telematics provider.   This endpoint helps ensure that you are never limited by Terminal. You can use passthrough requests to access capabilities that may be limited to a specific TSP or not yet in the normalized model.  Our team is here an ready to support custom use cases that may need `/passthrough`
     * @summary Passthrough
     * @param {DataManagementApiMakePassthroughRequestRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataManagementApiGenerated
     */
    public makePassthroughRequest(requestParameters: DataManagementApiMakePassthroughRequestRequest = {}, options?: AxiosRequestConfig) {
        return DataManagementApiFp(this.configuration).makePassthroughRequest(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Manually request to sync the current connections data.  By default, Terminal will sync all connections where `syncMode = automatic` on a regular cadence. For customers that may not need a fleet\'s data to be kept up to date and want to reduce their active tracked trucks, you can set `syncMode = manual` and invoke this endpoint when you want to sync data.  If you\'re wondering if this is relevent to your use case then feel free to reach out and we\'d be happy to assist.
     * @summary Request Sync
     * @param {DataManagementApiRequestSyncManualRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DataManagementApiGenerated
     */
    public requestSyncManual(requestParameters: DataManagementApiRequestSyncManualRequest = {}, options?: AxiosRequestConfig) {
        return DataManagementApiFp(this.configuration).requestSyncManual(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}