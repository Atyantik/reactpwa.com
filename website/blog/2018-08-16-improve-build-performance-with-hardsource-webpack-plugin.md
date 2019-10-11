---
title: Improve build performance of webpack
author: Tirth Bodawala
authorURL: https://twitter.com/tirthbodawala
authorFBID: 1501220844
---
We have been working on many very large enterprise JavaScript applications and have faced the issue of building the application for production or hot-module-reload.  
  
As the size of bundle increases webpack takes long to respond. Well `hard-source-webpack-plugin` can be of help, easing the pain of rebuilding.     

<!--truncate-->


## Include HardSourceWebpackPlugin as devDependency
```bash
npm install --save-dev hard-source-webpack-plugin
```

> Use the reference guide provided by the developer for more detailed installation at  
[https://github.com/mzgoddard/hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin).  
Please use the configuration options required as per your project configuration





## Add HardSourceWebpackPlugin to webpack config
We will use the hook `beforeConfig` to add the plugin.

### Create/update `src/webpack.js` 
if not already created, create file `src/webpack.js` and add/edit the code as below

```javascript
import HardSourceWebpackPlugin from "hard-source-webpack-plugin";

export default class ProjectWebpack {
  apply(webpackHandler) {


    /**
     * Adding hard source webpack plugin
     */
    webpackHandler.hooks.beforeConfig.tap("AddHardSourceWebpackPlugin", (env, type, config) => {
      try {
        let allConfigs = config;

        if (!Array.isArray(allConfigs)) {
          allConfigs = [config];
        }
        allConfigs.forEach(config => {
          // Check if the config already have the plugin added
          const alreadyHasPlugin = config.plugins.some(plugin => plugin instanceof HardSourceWebpackPlugin);

          // if so, do not add it again
          if (alreadyHasPlugin) return;

          // else add the Plugin
          config.plugins.push(new HardSourceWebpackPlugin(/** options= {} **/));


          const alreadyHasExcludePlugin = config.plugins.some(plugin => plugin instanceof HardSourceWebpackPlugin.ExcludeModulePlugin);
          if (alreadyHasExcludePlugin) return;

          config.plugins.push(new HardSourceWebpackPlugin.ExcludeModulePlugin([
            {
              // HardSource works with mini-css-extract-plugin but due to how
              // mini-css emits assets, assets are not emitted on repeated builds with
              // mini-css and hard-source together. Ignoring the mini-css loader
              // modules, but not the other css loader modules, excludes the modules
              // that mini-css needs rebuilt to output assets every time.
              test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
            }
          ]));
        });
      }catch (ex) {
        //eslint-disable-next-line
        console.log(ex);
      }
    });
  }
}

```
In the above code we checked each config for  HardSourceWebpackPlugin && HardSourceWebpackPlugin.ExcludeModulePlugin, and added them to the plugin list if they do not already exists.  
  
As we are using `mini-css-extract-plugin` with PawJS we have excluded if from being cached.  
  
<div class="custom-slant"></div>  

## Performance Improvements

To do the performance check I cleared the npm & babel cache for the boilerplate of [https://github.com/Atyantik/react-pwa](https://github.com/Atyantik/react-pwa) with simply displays hello world on start and tried building it

### First build without `HardSourceWebpackPlugin`
```bash
ℹ ｢pawjs｣: Hash: 9869ee9e65ed15a0f51f
Child server:
    Hash: 9869ee9e65ed15a0f51f
    Time: 8390ms
    Built at: 08/16/2018 3:56:34 PM
        Asset      Size  Chunks             Chunk Names
    server.js  1.02 MiB    main  [emitted]  main  
ℹ ｢pawjs｣: Compiled successfully.  

[BABEL] Note: The code generator has deoptimised the styling of /home/tirthbodawala/workspace/react-pwa/node_modules/react-dom/cjs/react-dom.development.js as it exceeds the max of 500KB.
ℹ ｢pawjs｣: Hash: abf5f6bb64e509f535c3
Child web:
    Hash: abf5f6bb64e509f535c3
    Time: 10079ms
    Built at: 08/16/2018 3:56:36 PM
                                          Asset      Size          Chunks             Chunk Names
    images/715d8373bad8c370c2922f09e90f4224.png  4.78 KiB                  [emitted]  
    images/3a8136a792cfe525ff82f7488883fa1d.png  11.6 KiB                  [emitted]  
                     js/abf5f6bb64e509f535c3.js  38.2 KiB          client  [emitted]  client
                     js/4e6be8a2c3c0e363c2bd.js   2.4 MiB  vendors~client  [emitted]  vendors~client
ℹ ｢pawjs｣: Compiled successfully.

```
The over all compilation took `18469 ms` i.e. around 18.5 seconds
  
### Second build without `HardSourceWebpackPlugin`
```bash
ℹ ｢pawjs｣: Hash: 9869ee9e65ed15a0f51f
Child server:
    Hash: 9869ee9e65ed15a0f51f
    Time: 2337ms
    Built at: 08/16/2018 3:57:06 PM
        Asset      Size  Chunks             Chunk Names
    server.js  1.02 MiB    main  [emitted]  main
ℹ ｢pawjs｣: Compiled successfully.
ℹ ｢pawjs｣: Hash: abf5f6bb64e509f535c3
Child web:
    Hash: abf5f6bb64e509f535c3
    Time: 2785ms
    Built at: 08/16/2018 3:57:06 PM
                                          Asset      Size          Chunks             Chunk Names
    images/715d8373bad8c370c2922f09e90f4224.png  4.78 KiB                  [emitted]  
    images/3a8136a792cfe525ff82f7488883fa1d.png  11.6 KiB                  [emitted]  
                     js/abf5f6bb64e509f535c3.js  38.2 KiB          client  [emitted]  client
                     js/4e6be8a2c3c0e363c2bd.js   2.4 MiB  vendors~client  [emitted]  vendors~client
ℹ ｢pawjs｣: Compiled successfully.

```
The compilation was completed in `5122 ms` i.e. around 5.12 seconds, not bad ;)
  


<div class="custom-slant"></div>  
  
### First build with `HardSourceWebpackPlugin`
```bash
[hardsource:6f2cf474] Writing new cache 6f2cf474...
[hardsource:c8870e66] Writing new cache c8870e66...
[hardsource:6f2cf474] Tracking node dependencies with: package-lock.json.
[hardsource:c8870e66] Tracking node dependencies with: package-lock.json.
ℹ ｢pawjs｣: Hash: 9869ee9e65ed15a0f51f
Child server:
    Hash: 9869ee9e65ed15a0f51f
    Time: 9036ms
    Built at: 08/16/2018 4:14:32 PM
        Asset      Size  Chunks             Chunk Names
    server.js  1.02 MiB    main  [emitted]  main
ℹ ｢pawjs｣: Compiled successfully.
ℹ ｢pawjs｣: Hash: abf5f6bb64e509f535c3
Child web:
    Hash: abf5f6bb64e509f535c3
    Time: 12821ms
    Built at: 08/16/2018 4:14:32 PM
                                          Asset      Size          Chunks             Chunk Names
    images/715d8373bad8c370c2922f09e90f4224.png  4.78 KiB                  [emitted]  
    images/3a8136a792cfe525ff82f7488883fa1d.png  11.6 KiB                  [emitted]  
                     js/abf5f6bb64e509f535c3.js  38.2 KiB          client  [emitted]  client
                     js/4e6be8a2c3c0e363c2bd.js   2.4 MiB  vendors~client  [emitted]  vendors~client
ℹ ｢pawjs｣: Compiled successfully.


```
The over all compilation took `21857 ms` i.e. around 21.9 seconds

### Second build with `HardSourceWebpackPlugin`
```bash
[hardsource:6f2cf474] Using 16 MB of disk space.
[hardsource:6f2cf474] Tracking node dependencies with: package-lock.json.
[hardsource:6f2cf474] Reading from cache 6f2cf474...
[hardsource:c8870e66] Using 16 MB of disk space.
ℹ ｢pawjs｣: Hash: 9869ee9e65ed15a0f51f
Child server:
    Hash: 9869ee9e65ed15a0f51f
    Time: 522ms
    Built at: 08/16/2018 4:14:45 PM
        Asset      Size  Chunks             Chunk Names
    server.js  1.02 MiB    main  [emitted]  main
ℹ ｢pawjs｣: Compiled successfully.
[hardsource:c8870e66] Tracking node dependencies with: package-lock.json.
[hardsource:c8870e66] Reading from cache c8870e66...
ℹ ｢pawjs｣: Hash: abf5f6bb64e509f535c3
Child web:
    Hash: abf5f6bb64e509f535c3
    Time: 1449ms
    Built at: 08/16/2018 4:14:46 PM
                                          Asset      Size          Chunks             Chunk Names
    images/715d8373bad8c370c2922f09e90f4224.png  4.78 KiB                  [emitted]  
    images/3a8136a792cfe525ff82f7488883fa1d.png  11.6 KiB                  [emitted]  
                     js/abf5f6bb64e509f535c3.js  38.2 KiB          client  [emitted]  client
                     js/4e6be8a2c3c0e363c2bd.js   2.4 MiB  vendors~client  [emitted]  vendors~client
ℹ ｢pawjs｣: Compiled successfully.


```
The over all compilation took `1971 ms` i.e. around 2 seconds. AMAZING!

## Conclusion
HardSourceWebpackPlugin plugin can reduce the rebuild time by more than 300% if used carefully. We have seen great performance improvement when developing large applications. But as mentioned, it can cache critical files sometimes and can thus create confusion by not reflecting new changes properly.  
  
  
Go through the documentation of `HardSourceWebpackPlugin` and use it properly and wisely. 
 

<div class="custom-slant"></div>  
  
