# NGPWA
Playing around with PWA in Angular 5

https://www.reddit.com/r/Angular2/comments/60y32v/observables_and_pagination_loop_a_flatmap/

https://medium.com/google-developer-experts/a-new-angular-service-worker-creating-automatic-progressive-web-apps-part-2-practice-3221471269a1

https://medium.com/codingthesmartway-com-blog/angular-5-service-worker-b722e571e306
https://angular.io/guide/service-worker-intro

https://angular.io/guide/service-worker-configref

https://material.angular.io/guide/getting-started
https://swapi.co/

npm install -g @angular/cli 1.6+

ng new [name] --service-worker

## Checks

If the installation was successful the .angular-cli.json file should have
```json
"apps": [{
  "serviceWorker": true
}]
```

## Work in production

Service workers are only working in production mode, thus the following will fail at installing the service workers.
```
ng serve
```


Install serve to serve production:
npm install -g serve
or
npm install -g http-server

run: ng build --prod
then: 
```
serve ./dist 
```
or 
```
cd dist
http-server -p 8080
```

In the terminal you should now see

Serving!
- Local: http://localhost:5000
- On your Network: http://xxx.xxx.xxx.xxx:5000

npm install --save @angular/material @angular/cdk @angular/animations

npm install --save hammerjs

In src/main.ts 

import 'hammerjs';

Good example for external information to save in the cache.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

In ngsw-config.json (check first with ** if it caches)

```json
{
    "name": "assets",
    "installMode": "lazy",
    "updateMode": "prefetch",
    "resources": {
      "files": [
        "/assets/**"
      ],
      "urls": [
        "https://fonts.googleapis.com/icon?family=Material+Icons",
        "https://fonts.googleapis.com/**"
      ]
    }
  }
```
# ngsw-config.json

## assetGroups

The resources that are 'static' in the website, `assetGroups` should group all the resources for the application's shell (app + third parties resources)

### Install/Update Mode can be 'prefetch'/'lazy'

`installMode`:
prefetch: fetch all the listed resources when caching the application. Bandwidth-intensive, but makes sure that all the resource is available when requested, especially in offline mode.
lazy: no upfront caching. The caching is only performed when a request to the resource is received. Thus a resource that is not requested is a resource that is not cached. This ensures that no unnecessary caching is performed on assets such as images with different resolutions.

`updateMode`:
prefetch: ensures that the service worker caches any modified resources straight away
lazy: `"updateMode": "lazy"` is a valid choice only if `"installMode": "lazy"`. Similarly to `installMode`, the assets are only updated when they are requested.

 ### resources

 files: can be a single file or a pattern:
 example:

 versionedFiles: is similar to files, but should be used for files that are already versioned, having a hash in the filename. Angular generated files such as *.chunk.js or *.bundle.css/js are examples

 urls: URLs and URL patterns. A use case could be CDNs, material icons in this demo.

 ## dataGroups

 They are at the same level as the assetGroups in the json. The data is not static, thus it should not be included in the app versioning. Your application will remain the same, but the result to API calls might change. 
 The caching for data is done via manually-configured policies.

 One dataGroup = one policy

 ### name : string
 
 name of the policy (unique identifier)

 ### urls: string[]

URLs matching the content of this list will be cached respecting the dataGroup policy.

### cacheConfig

maxSize (required): Max number of entries/responses stored in the cache
maxAge (required): Validity period of the entries/responses in the cache. When the period expires, the data is removed from the cache.
timeout (optional): period of time the service worker waits before using the cached response instead of the network response.

strategy
- performance: this is the strategy default value, it's name says it all, it is going for the fastest response, which will most likely always be the cache. This is not suitable for quickly changing data.
- freshness: here as well, it's name says it all, it will use the freshest data, i.e. the network data first. If the timeout is reached, it used the cache.



# Router
# Modules
# Services
# Models
# SWAPI