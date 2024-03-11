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
 * IFTAApi - axios parameter creator
 * @export
 */
export const IFTAApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get all vehicle IFTA reports for the requested time span.  Currently can only increment by full months.   _Note:_ data may change for a few days after the month. We will continue to update those reports to ensure you get accurate results.
         * @summary Get IFTA Summary
         * @param {string} [cursor] Pagination cursor to start requests from
         * @param {string} [expand] Expand resources in the returned response
         * @param {string} [raw] Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.
         * @param {string} [startMonth] (Required) The month from which to start including vehicle reports
         * @param {string} [endMonth] (Required) Include vehicle reports up to and including this month
         * @param {string} [groupBy] Computes the total distance traversed within a specified month range, with the results grouped by either jurisdiction, vehicle, or both. If no grouping parameter is provided, the default grouping is &#x60;vehicle,jurisdiction&#x60;.
         * @param {string} [connectionToken] (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMonthlyReports: async (cursor?: string, expand?: string, raw?: string, startMonth?: string, endMonth?: string, groupBy?: string, connectionToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ifta/summary`;
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

            if (expand !== undefined) {
                localVarQueryParameter['expand'] = expand;
            }

            if (raw !== undefined) {
                localVarQueryParameter['raw'] = raw;
            }

            if (startMonth !== undefined) {
                localVarQueryParameter['startMonth'] = startMonth;
            }

            if (endMonth !== undefined) {
                localVarQueryParameter['endMonth'] = endMonth;
            }

            if (groupBy !== undefined) {
                localVarQueryParameter['groupBy'] = groupBy;
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
                pathTemplate: '/ifta/summary',
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
 * IFTAApi - functional programming interface
 * @export
 */
export const IFTAApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = IFTAApiAxiosParamCreator(configuration)
    return {
        /**
         * Get all vehicle IFTA reports for the requested time span.  Currently can only increment by full months.   _Note:_ data may change for a few days after the month. We will continue to update those reports to ensure you get accurate results.
         * @summary Get IFTA Summary
         * @param {IFTAApiGetMonthlyReportsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMonthlyReports(requestParameters: IFTAApiGetMonthlyReportsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMonthlyReports(requestParameters.cursor, requestParameters.expand, requestParameters.raw, requestParameters.startMonth, requestParameters.endMonth, requestParameters.groupBy, requestParameters.connectionToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * IFTAApi - factory interface
 * @export
 */
export const IFTAApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = IFTAApiFp(configuration)
    return {
        /**
         * Get all vehicle IFTA reports for the requested time span.  Currently can only increment by full months.   _Note:_ data may change for a few days after the month. We will continue to update those reports to ensure you get accurate results.
         * @summary Get IFTA Summary
         * @param {IFTAApiGetMonthlyReportsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMonthlyReports(requestParameters: IFTAApiGetMonthlyReportsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getMonthlyReports(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMonthlyReports operation in IFTAApi.
 * @export
 * @interface IFTAApiGetMonthlyReportsRequest
 */
export type IFTAApiGetMonthlyReportsRequest = {
    
    /**
    * Pagination cursor to start requests from
    * @type {string}
    * @memberof IFTAApiGetMonthlyReports
    */
    readonly cursor?: string
    
    /**
    * Expand resources in the returned response
    * @type {string}
    * @memberof IFTAApiGetMonthlyReports
    */
    readonly expand?: string
    
    /**
    * Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.
    * @type {string}
    * @memberof IFTAApiGetMonthlyReports
    */
    readonly raw?: string
    
    /**
    * (Required) The month from which to start including vehicle reports
    * @type {string}
    * @memberof IFTAApiGetMonthlyReports
    */
    readonly startMonth?: string
    
    /**
    * (Required) Include vehicle reports up to and including this month
    * @type {string}
    * @memberof IFTAApiGetMonthlyReports
    */
    readonly endMonth?: string
    
    /**
    * Computes the total distance traversed within a specified month range, with the results grouped by either jurisdiction, vehicle, or both. If no grouping parameter is provided, the default grouping is `vehicle,jurisdiction`.
    * @type {string}
    * @memberof IFTAApiGetMonthlyReports
    */
    readonly groupBy?: string
    
    /**
    * (Required) The token returned when a user authenticated their account. This authorizes access to a specific account.
    * @type {string}
    * @memberof IFTAApiGetMonthlyReports
    */
    readonly connectionToken?: string
    
}

/**
 * IFTAApiGenerated - object-oriented interface
 * @export
 * @class IFTAApiGenerated
 * @extends {BaseAPI}
 */
export class IFTAApiGenerated extends BaseAPI {
    /**
     * Get all vehicle IFTA reports for the requested time span.  Currently can only increment by full months.   _Note:_ data may change for a few days after the month. We will continue to update those reports to ensure you get accurate results.
     * @summary Get IFTA Summary
     * @param {IFTAApiGetMonthlyReportsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IFTAApiGenerated
     */
    public getMonthlyReports(requestParameters: IFTAApiGetMonthlyReportsRequest = {}, options?: AxiosRequestConfig) {
        return IFTAApiFp(this.configuration).getMonthlyReports(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}