<div align="left">

[![Visit Terminal](./header.png)](https://withterminal.com)

# [Terminal](https://withterminal.com)<a id="terminal"></a>

Terminal is a unified API that makes it easy to integrate with the leading telematics service providers.

Contact Support:
 Name: Terminal
 Email: connect@withterminal.com

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`terminal.authentication.exchangeToken`](#terminalauthenticationexchangetoken)
  * [`terminal.connections.createCustomConnection`](#terminalconnectionscreatecustomconnection)
  * [`terminal.connections.getCurrentDetails`](#terminalconnectionsgetcurrentdetails)
  * [`terminal.connections.listAll`](#terminalconnectionslistall)
  * [`terminal.connections.updateCurrentConnectionDetails`](#terminalconnectionsupdatecurrentconnectiondetails)
  * [`terminal.dataManagement.getSyncStatus`](#terminaldatamanagementgetsyncstatus)
  * [`terminal.dataManagement.listSyncHistory`](#terminaldatamanagementlistsynchistory)
  * [`terminal.dataManagement.makePassthroughRequest`](#terminaldatamanagementmakepassthroughrequest)
  * [`terminal.dataManagement.requestSyncManual`](#terminaldatamanagementrequestsyncmanual)
  * [`terminal.drivers.getDetails`](#terminaldriversgetdetails)
  * [`terminal.drivers.list`](#terminaldriverslist)
  * [`terminal.groups.getAllGroups`](#terminalgroupsgetallgroups)
  * [`terminal.hoursOfService.getAvailableTime`](#terminalhoursofservicegetavailabletime)
  * [`terminal.hoursOfService.getDailyLogs`](#terminalhoursofservicegetdailylogs)
  * [`terminal.hoursOfService.listHosLogs`](#terminalhoursofservicelisthoslogs)
  * [`terminal.iFTA.getMonthlyReports`](#terminaliftagetmonthlyreports)
  * [`terminal.issues.listObservedEvents`](#terminalissueslistobservedevents)
  * [`terminal.issues.markResolved`](#terminalissuesmarkresolved)
  * [`terminal.providers.getList`](#terminalprovidersgetlist)
  * [`terminal.safety.getEvents`](#terminalsafetygetevents)
  * [`terminal.trailers.getAllTrailers`](#terminaltrailersgetalltrailers)
  * [`terminal.trailers.listLatestLocations`](#terminaltrailerslistlatestlocations)
  * [`terminal.trips.getAllTrips`](#terminaltripsgetalltrips)
  * [`terminal.vehicles.getAll`](#terminalvehiclesgetall)
  * [`terminal.vehicles.getDetails`](#terminalvehiclesgetdetails)
  * [`terminal.vehicles.getHistoricalStats`](#terminalvehiclesgethistoricalstats)
  * [`terminal.vehicles.getLatestLocations`](#terminalvehiclesgetlatestlocations)
  * [`terminal.vehicles.listHistoricalLocations`](#terminalvehicleslisthistoricallocations)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Terminal&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Terminal } from "terminal-typescript-sdk";

const terminal = new Terminal({
  // Defining the base path is optional and defaults to https://api.sandbox.withterminal.com/tsp/v1
  // basePath: "https://api.sandbox.withterminal.com/tsp/v1",
  accessToken: "ACCESS_TOKEN",
});

const exchangeTokenResponse = await terminal.authentication.exchangeToken({
  publicToken: "INSERT_PUBLIC_TOKEN",
});

console.log(exchangeTokenResponse);
```

## Reference<a id="reference"></a>


### `terminal.authentication.exchangeToken`<a id="terminalauthenticationexchangetoken"></a>

Exchange the `publicToken` returned by our hosted authentication flow for a long lived connection token that will be used when requesting data from a customer's TSP.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const exchangeTokenResponse = await terminal.authentication.exchangeToken({
  publicToken: "INSERT_PUBLIC_TOKEN",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### publicToken: `string`<a id="publictoken-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/public-token/exchange` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.connections.createCustomConnection`<a id="terminalconnectionscreatecustomconnection"></a>

Create a new connection via API. This endpoint can be used to provide a completely custom connection creation experience for your customers.

For most use cases we recommend using the [Link UI](./rhuaxk9205cn8-link-component) to create connections.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCustomConnectionResponse =
  await terminal.connections.createCustomConnection({
    tags: ["Tag Name", "Tag Name"],
    externalId: "ullamco dolore ipsum",
    provider: "geotab",
    syncMode: "automatic",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`[]<a id="tags-string"></a>

##### backfill: [`ConnectionsCreateCustomConnectionRequestBackfill`](./models/connections-create-custom-connection-request-backfill.ts)<a id="backfill-connectionscreatecustomconnectionrequestbackfillmodelsconnections-create-custom-connection-request-backfillts"></a>

##### company: [`ConnectionsCreateCustomConnectionRequestCompany`](./models/connections-create-custom-connection-request-company.ts)<a id="company-connectionscreatecustomconnectionrequestcompanymodelsconnections-create-custom-connection-request-companyts"></a>

##### credentials: [`ConnectionsCreateCustomConnectionRequestCredentials`](./models/connections-create-custom-connection-request-credentials.ts)<a id="credentials-connectionscreatecustomconnectionrequestcredentialsmodelsconnections-create-custom-connection-request-credentialsts"></a>

##### externalId: `string`<a id="externalid-string"></a>

##### provider: `string`<a id="provider-string"></a>

##### syncMode: `string`<a id="syncmode-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.connections.getCurrentDetails`<a id="terminalconnectionsgetcurrentdetails"></a>

Get the details of the current active connection. The current connection is derived from the provided connection token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCurrentDetailsResponse = await terminal.connections.getCurrentDetails({
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connections/current` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.connections.listAll`<a id="terminalconnectionslistall"></a>

List all of the connections you have for your application. Connections represent the authenticated access you have to your customer's TSP data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await terminal.connections.listAll({
  cursor: "{{nextCursor}}",
  limit: "1",
  externalId: "123",
  dotNumber: "123",
  tag: "tempor in aliqua",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### externalId: `string`<a id="externalid-string"></a>

##### dotNumber: `string`<a id="dotnumber-string"></a>

##### tag: `string`<a id="tag-string"></a>

Filter connections by tag

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.connections.updateCurrentConnectionDetails`<a id="terminalconnectionsupdatecurrentconnectiondetails"></a>

Update the details of the current active connection. The current connection is derived from the provided connection token.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCurrentConnectionDetailsResponse =
  await terminal.connections.updateCurrentConnectionDetails({
    connectionToken: "{{connectionToken}}",
    tags: ["dolor in magna", "reprehenderit dolor nostrud"],
    externalId: "ad sed dolore cupidatat",
    status: "laborum sed consectetur",
    syncMode: "automatic",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`[]<a id="tags-string"></a>

##### company: [`ConnectionsUpdateCurrentConnectionDetailsRequestCompany`](./models/connections-update-current-connection-details-request-company.ts)<a id="company-connectionsupdatecurrentconnectiondetailsrequestcompanymodelsconnections-update-current-connection-details-request-companyts"></a>

##### externalId: `string`<a id="externalid-string"></a>

##### status: `string`<a id="status-string"></a>

##### syncMode: `string`<a id="syncmode-string"></a>

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/connections/current` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.dataManagement.getSyncStatus`<a id="terminaldatamanagementgetsyncstatus"></a>

Get the status of a sync job by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSyncStatusResponse = await terminal.dataManagement.getSyncStatus({
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

(Required) 

##### expand: `string`<a id="expand-string"></a>

Expand related resources in the response to reduce requests.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/syncs/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.dataManagement.listSyncHistory`<a id="terminaldatamanagementlistsynchistory"></a>

List a log of all batch sync jobs for the current connection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSyncHistoryResponse = await terminal.dataManagement.listSyncHistory({
  limit: "1",
  cursor: "{{nextCursor}}",
  status: "in_progress",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### status: `string`<a id="status-string"></a>

##### expand: `string`<a id="expand-string"></a>

Expand related resources in the response to reduce requests.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/syncs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.dataManagement.makePassthroughRequest`<a id="terminaldatamanagementmakepassthroughrequest"></a>

Make an authenticated request to the underlying telematics provider. 

This endpoint helps ensure that you are never limited by Terminal. You can use passthrough requests to access capabilities that may be limited to a specific TSP or not yet in the normalized model.

Our team is here an ready to support custom use cases that may need `/passthrough`

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const makePassthroughRequestResponse =
  await terminal.dataManagement.makePassthroughRequest({
    connectionToken: "{{connectionToken}}",
    body: '{"reportId":"1234"}',
    method: "POST",
    path: "/reports",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### body: `string`<a id="body-string"></a>

##### headers: `object`<a id="headers-object"></a>

##### method: `string`<a id="method-string"></a>

##### path: `string`<a id="path-string"></a>

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/passthrough` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.dataManagement.requestSyncManual`<a id="terminaldatamanagementrequestsyncmanual"></a>

Manually request to sync the current connections data.

By default, Terminal will sync all connections where `syncMode = automatic` on a regular cadence. For customers that may not need a fleet's data to be kept up to date and want to reduce their active tracked trucks, you can set `syncMode = manual` and invoke this endpoint when you want to sync data.

If you're wondering if this is relevent to your use case then feel free to reach out and we'd be happy to assist.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const requestSyncManualResponse =
  await terminal.dataManagement.requestSyncManual({
    connectionToken: "{{connectionToken}}",
    days: 7,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### days: `number`<a id="days-number"></a>

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/syncs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.drivers.getDetails`<a id="terminaldriversgetdetails"></a>

Get the details of a specific driver

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await terminal.drivers.getDetails({
  raw: "true",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

(Required) 

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/drivers/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.drivers.list`<a id="terminaldriverslist"></a>

List all of the drivers in the connected account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await terminal.drivers.list({
  cursor: "{{nextCursor}}",
  limit: "1",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  raw: "true",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/drivers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.groups.getAllGroups`<a id="terminalgroupsgetallgroups"></a>

List Groups

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllGroupsResponse = await terminal.groups.getAllGroups({
  limit: "1",
  cursor: "{{nextCursor}}",
  expand: "",
  raw: "true",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.hoursOfService.getAvailableTime`<a id="terminalhoursofservicegetavailabletime"></a>

List available time for the driver. This endpoint provides live access to the driver's available time. Different than most endpoints, this endpoint calls the provider's API in real time to get the latest available time for the driver. This endpoint is useful for building real time applications that need to know the driver's available time.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAvailableTimeResponse = await terminal.hoursOfService.getAvailableTime(
  {
    cursor: "{{nextCursor}}",
    limit: "1",
    driverIds: "{{driverId}}",
    expand: "",
    raw: "true",
    connectionToken: "{{connectionToken}}",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### driverIds: `string`<a id="driverids-string"></a>

Comma separated list of driver IDs to filter for

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hos/available-time` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.hoursOfService.getDailyLogs`<a id="terminalhoursofservicegetdailylogs"></a>

List daily summary of hours of service. Each daily log represents the time a driver spent in each duty status for a given day.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDailyLogsResponse = await terminal.hoursOfService.getDailyLogs({
  cursor: "{{nextCursor}}",
  limit: "1",
  startDate: "1995-04-25",
  endDate: "1995-04-25",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  driverIds: "{{driverId}}",
  raw: "true",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### startDate: `string`<a id="startdate-string"></a>

Only include daily logs from on or after a specific date

##### endDate: `string`<a id="enddate-string"></a>

Only include daily logs from on or before a specific date

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### driverIds: `string`<a id="driverids-string"></a>

Comma separated list of driver IDs to filter for

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hos/daily-logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.hoursOfService.listHosLogs`<a id="terminalhoursofservicelisthoslogs"></a>

List all hours of service logs. Currently, HOS logs are tracked as the distinct changes in duty status. In the future we will be offering endpoints to expose current HOS status and historical daily summaries.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listHosLogsResponse = await terminal.hoursOfService.listHosLogs({
  cursor: "{{nextCursor}}",
  limit: "1",
  startedAfter: "2021-01-06T03:24:53.000Z",
  startedBefore: "2021-01-06T03:24:53.000Z",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  driverIds: "{{driverId}}",
  expand: "",
  raw: "true",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### startedAfter: `string`<a id="startedafter-string"></a>

Only include records of statuses that started after a provided date.

##### startedBefore: `string`<a id="startedbefore-string"></a>

Only include records of statuses that started before a provided date.

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### driverIds: `string`<a id="driverids-string"></a>

Comma separated list of driver IDs to filter for

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/hos/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.iFTA.getMonthlyReports`<a id="terminaliftagetmonthlyreports"></a>

Get all vehicle IFTA reports for the requested time span.

Currently can only increment by full months. 

_Note:_ data may change for a few days after the month. We will continue to update those reports to ensure you get accurate results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMonthlyReportsResponse = await terminal.iFTA.getMonthlyReports({
  cursor: "{{nextCursor}}",
  expand: "",
  raw: "true",
  startMonth: "2021-01",
  endMonth: "2021-01",
  groupBy: "vehicle,jurisdiction",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### startMonth: `string`<a id="startmonth-string"></a>

(Required) The month from which to start including vehicle reports

##### endMonth: `string`<a id="endmonth-string"></a>

(Required) Include vehicle reports up to and including this month

##### groupBy: `string`<a id="groupby-string"></a>

Computes the total distance traversed within a specified month range, with the results grouped by either jurisdiction, vehicle, or both. If no grouping parameter is provided, the default grouping is `vehicle,jurisdiction`.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/ifta/summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.issues.listObservedEvents`<a id="terminalissueslistobservedevents"></a>

List all issues that have been observed by Terminal.
Issues are generated when we observe something that may impact the completeness or accuracy of the data we provide but do not justify a full error.
For example, if we lack permissions for a specific resource or need to skip an item due to invalid data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listObservedEventsResponse = await terminal.issues.listObservedEvents({
  limit: "1",
  cursor: "{{nextCursor}}",
  lastReportedAfter: "2023-06-07",
  lastReportedBefore: "2023-06-07",
  expand: "",
  connectionId: "conn_01GV12VR4DJP70GD1ZBK0SDWFH",
  errorCode: "invalid_source_id",
  status: "ongoing",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### lastReportedAfter: `string`<a id="lastreportedafter-string"></a>

Timestamp to start when the issue was last observed

##### lastReportedBefore: `string`<a id="lastreportedbefore-string"></a>

Timestamp to end when the issue was last observed

##### expand: `string`<a id="expand-string"></a>

Expand related resources to see all details

##### connectionId: `string`<a id="connectionid-string"></a>

Filter issues to a specific connection

##### errorCode: `string`<a id="errorcode-string"></a>

Filter issues to a specific error code

##### status: `string`<a id="status-string"></a>

Filter issues to a specific status

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/issues` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.issues.markResolved`<a id="terminalissuesmarkresolved"></a>

Mark an issue's status as `resolved` until the issue is observed again.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const markResolvedResponse = await terminal.issues.markResolved({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### issueId: `string`<a id="issueid-string"></a>

(Required) 

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/issues/{issueId}/resolve` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.providers.getList`<a id="terminalprovidersgetlist"></a>

Retrieve a list of the providers Terminal supports. This endpoint will grow to include additional details about the supported capabilities of each provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await terminal.providers.getList();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/providers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.safety.getEvents`<a id="terminalsafetygetevents"></a>

List all safety events detected by the provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventsResponse = await terminal.safety.getEvents({
  cursor: "{{nextCursor}}",
  limit: "1",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  startedAfter: "2021-01-06T03:24:53.000Z",
  startedBefore: "2021-01-06T03:24:53.000Z",
  driverIds: "{{driverId}}",
  vehicleIds: "{{vehicleId}}",
  expand: "",
  raw: "true",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### startedAfter: `string`<a id="startedafter-string"></a>

Only include records of statuses that started after a provided date.

##### startedBefore: `string`<a id="startedbefore-string"></a>

Only include records of statuses that started before a provided date.

##### driverIds: `string`<a id="driverids-string"></a>

Comma separated list of driver IDs to filter for

##### vehicleIds: `string`<a id="vehicleids-string"></a>

Comma separated list of vehicle IDs to filter for

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/safety/events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.trailers.getAllTrailers`<a id="terminaltrailersgetalltrailers"></a>

List Trailers

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllTrailersResponse = await terminal.trailers.getAllTrailers({
  limit: "1",
  cursor: "{{nextCursor}}",
  expand: "",
  raw: "true",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trailers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.trailers.listLatestLocations`<a id="terminaltrailerslistlatestlocations"></a>

Latest Trailer Locations

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLatestLocationsResponse = await terminal.trailers.listLatestLocations(
  {
    limit: "1",
    cursor: "{{nextCursor}}",
    expand: "",
    raw: "true",
    connectionToken: "{{connectionToken}}",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trailers/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.trips.getAllTrips`<a id="terminaltripsgetalltrips"></a>

List all trips in the connected account. Trips define a period of time where a vehicle is in motion.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllTripsResponse = await terminal.trips.getAllTrips({
  cursor: "{{nextCursor}}",
  limit: "1",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  startedAfter: "2021-01-06T03:24:53.000Z",
  startedBefore: "2021-01-06T03:24:53.000Z",
  endedAfter: "2021-01-06T03:24:53.000Z",
  endedBefore: "2021-01-06T03:24:53.000Z",
  driverIds: "{{driverId}}",
  vehicleIds: "{{vehicleId}}",
  raw: "true",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### startedAfter: `string`<a id="startedafter-string"></a>

Only include trips that started after a provided date.

##### startedBefore: `string`<a id="startedbefore-string"></a>

Only include trips that started before a provided date.

##### endedAfter: `string`<a id="endedafter-string"></a>

Only include trips that ended after a provided date.

##### endedBefore: `string`<a id="endedbefore-string"></a>

Only include trips that ended before a provided date.

##### driverIds: `string`<a id="driverids-string"></a>

Comma separated list of driver IDs to filter for

##### vehicleIds: `string`<a id="vehicleids-string"></a>

Comma separated list of vehicle IDs to filter for

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trips` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.vehicles.getAll`<a id="terminalvehiclesgetall"></a>

List all of the vehicles in the connected account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await terminal.vehicles.getAll({
  cursor: "{{nextCursor}}",
  limit: "1",
  modifiedAfter: "2021-01-06T03:24:53.000Z",
  modifiedBefore: "2021-01-06T03:24:53.000Z",
  raw: "true",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### modifiedAfter: `string`<a id="modifiedafter-string"></a>

Only include records that were last modified after a provided date.

##### modifiedBefore: `string`<a id="modifiedbefore-string"></a>

Only include records that were last modified before a provided date.

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vehicles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.vehicles.getDetails`<a id="terminalvehiclesgetdetails"></a>

Get the details of a specific vehicle

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDetailsResponse = await terminal.vehicles.getDetails({
  raw: "true",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

(Required) 

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vehicles/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.vehicles.getHistoricalStats`<a id="terminalvehiclesgethistoricalstats"></a>

List historical stats and logs about the vehicle.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHistoricalStatsResponse = await terminal.vehicles.getHistoricalStats({
  cursor: "{{nextCursor}}",
  limit: "1",
  expand: "",
  startAt: "2021-01-06T03:24:53.000Z",
  endAt: "2021-01-06T03:24:53.000Z",
  types: "odometer,engine_state,fuel_level,total_fuel_consumption",
  raw: "true",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vehicleId: `string`<a id="vehicleid-string"></a>

(Required) 

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### startAt: `string`<a id="startat-string"></a>

Timestamp to start from - defaults to `TODAY - 1 MONTH`

##### endAt: `string`<a id="endat-string"></a>

Timestamp to end at - defaults to `TODAY`

##### types: `string`<a id="types-string"></a>

Comma separated list of vehicle stats to filter for

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vehicles/{vehicleId}/stats/historical` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.vehicles.getLatestLocations`<a id="terminalvehiclesgetlatestlocations"></a>

List the latest location of the vehicles in the connected account.
This endpoint will call the provider's API in real time to get the latest location of the vehicle. 
_Please note: this endpoint will exclude vehicles that have no last known location._

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLatestLocationsResponse = await terminal.vehicles.getLatestLocations({
  cursor: "{{nextCursor}}",
  limit: "1",
  raw: "true",
  vehicleIds: "{{vehicleId}}",
  expand: "",
  connectionToken: "{{connectionToken}}",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### vehicleIds: `string`<a id="vehicleids-string"></a>

Comma separated list of vehicle IDs to filter for

##### expand: `string`<a id="expand-string"></a>

Expand resources in the returned response

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vehicles/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `terminal.vehicles.listHistoricalLocations`<a id="terminalvehicleslisthistoricallocations"></a>

List the historical breadcrumb locations for a vehicle.

_Note:_

Given the large volume of location data available, we encourage customers to accept compressed (`gzip`) responses in order to maximize throughput. This is supported with many popular HTTP clients. Result limits vary depending on if results are compressed or not.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listHistoricalLocationsResponse =
  await terminal.vehicles.listHistoricalLocations({
    cursor: "{{nextCursor}}",
    limit: "1",
    startAt: "2021-01-06T03:24:53.000Z",
    endAt: "2021-01-06T03:24:53.000Z",
    raw: "true",
    connectionToken: "{{connectionToken}}",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### vehicleId: `string`<a id="vehicleid-string"></a>

(Required) Vehicle to retrieve breadcrumb locations for

##### cursor: `string`<a id="cursor-string"></a>

Pagination cursor to start requests from

##### limit: `string`<a id="limit-string"></a>

The maximum number of results to return in a page.

##### startAt: `string`<a id="startat-string"></a>

Timestamp to start from - defaults to `TODAY - 1 MONTH`

##### endAt: `string`<a id="endat-string"></a>

Timestamp to end at - defaults to `TODAY`

##### raw: `string`<a id="raw-string"></a>

Include raw responses used to normalize model. Used for debugging or accessing unique properties that are not unified.

##### connectionToken: `string`<a id="connectiontoken-string"></a>

(Required) The token returned when a user authenticated their account. This authorizes access to a specific account.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vehicles/{vehicleId}/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
