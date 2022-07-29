# Corrupted Container Demonstrator

## Configure Fluid Service

Configure the Fluid service w/ environment variables `FLUID_MODE=frs`

If `frs` is opted for, set-up both `SECRET_FLUID_TENANT` and  `SECRET_FLUID_TOKEN` env. vars. (as configured in your azure service  - `Tenant Id` respectively `Primary key` )

Example

```
FLUID_MODE=frs
SECRET_FLUID_TOKEN=xyz
SECRET_FLUID_TENANT=xyz
```

## Build & Test 

> Note the tests are already configured w/  `FLUID_MODE=frs` env var.

```sh
npm run clean
npm install
npm run build
npm run test
```

Running the test would generate following stack:

```
    Custom telemetry object array: {
      "eventName": "fluid:telemetry:Container:ContainerClose",
      "category": "error",
      "stack": "Error\n    at createR11sNetworkError (/home/dstanesc/code/3.0/getdeltas-exception-demo/node_modules/@fluidframework/routerlicious-driver/src/errorUtils.ts:78:20)\n    at throwR11sNetworkError (/home/dstanesc/code/3.0/getdeltas-exception-demo/node_modules/@fluidframework/routerlicious-driver/src/errorUtils.ts:96:26)\n    at RouterliciousOrdererRestWrapper.request (/home/dstanesc/code/3.0/getdeltas-exception-demo/node_modules/@fluidframework/routerlicious-driver/src/restWrapper.ts:101:30)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at RouterliciousDocumentServiceFactory.createDocumentService (/home/dstanesc/code/3.0/getdeltas-exception-demo/node_modules/@fluidframework/routerlicious-driver/src/documentServiceFactory.ts:209:39)\n    at Container.load (/home/dstanesc/code/3.0/getdeltas-exception-demo/node_modules/@fluidframework/container-loader/src/container.ts:1093:24)",
      "error": "R11s fetch error: Document is deleted and cannot be accessed.",
      "errorType": "fileNotFoundOrAccessDeniedError",
      "fluidErrorCode": "-",
      "statusCode": 404,
      "driverVersion": "1.2.2",
      "canRetry": false,
      "message": "R11s fetch error: Document is deleted and cannot be accessed.",
      "errorInstanceId": "3fe967bc-1dbe-41c3-80e5-4d5fc793b7e5",
      "clientType": "interactive",
      "containerId": "8900e616-7b36-42ec-a48b-95b1b15ec683",
      "docId": "e89e36f3-0d9c-43a2-9a71-24eef439e74f",
      "containerAttachState": "Detached",
      "containerLifecycleState": "loading",
      "containerConnectionState": "Disconnected",
      "dmInitialSeqNumber": 0,
      "dmLastProcessedSeqNumber": 0,
      "dmLastKnownSeqNumber": 0,
      "connectionStateDuration": null,
      "loaderId": "7cf7106f-add4-4e18-99ba-7a3cc42f10fc",
      "loaderVersion": "1.2.2"
    }
```
