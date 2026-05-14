// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"7wZbQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "9440bf780f77c784";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"2R06K":[function(require,module,exports,__globalThis) {
const testQuestions = {
    full: [
        {
            id: 1,
            correctAnswer: '74',
            options: [
                '74',
                '21',
                '14',
                '71'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'easy'
        },
        {
            id: 2,
            correctAnswer: '6',
            options: [
                '6',
                '8',
                '5',
                '9'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'easy'
        },
        {
            id: 3,
            correctAnswer: '29',
            options: [
                '29',
                '70',
                '26',
                '79'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'medium'
        },
        {
            id: 4,
            correctAnswer: '5',
            options: [
                '5',
                '3',
                '8',
                '6'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'medium'
        },
        {
            id: 5,
            correctAnswer: '15',
            options: [
                '15',
                '73',
                '13',
                '75'
            ],
            colorType: 'red-green',
            subtype: 'red-green',
            difficulty: 'hard'
        },
        {
            id: 6,
            correctAnswer: '7',
            options: [
                '7',
                '1',
                '4',
                '2'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue',
            difficulty: 'easy'
        },
        {
            id: 7,
            correctAnswer: '36',
            options: [
                '36',
                '30',
                '96',
                '90'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'medium'
        },
        {
            id: 8,
            correctAnswer: '97',
            options: [
                '97',
                '51',
                '91',
                '57'
            ],
            colorType: 'blue-yellow',
            subtype: 'yellow',
            difficulty: 'hard'
        },
        {
            id: 9,
            correctAnswer: '8',
            options: [
                '8',
                '3',
                '6',
                '9'
            ],
            colorType: 'total',
            subtype: 'total',
            difficulty: 'easy'
        },
        {
            id: 10,
            correctAnswer: '45',
            options: [
                '45',
                '49',
                '15',
                '19'
            ],
            colorType: 'red-green',
            subtype: 'red-green',
            difficulty: 'hard'
        },
        {
            id: 11,
            correctAnswer: '2',
            options: [
                '2',
                '5',
                '3',
                '7'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'easy'
        },
        {
            id: 12,
            correctAnswer: '42',
            options: [
                '42',
                '48',
                '12',
                '18'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'medium'
        },
        {
            id: 13,
            correctAnswer: '3',
            options: [
                '3',
                '5',
                '8',
                '6'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue',
            difficulty: 'easy'
        },
        {
            id: 14,
            correctAnswer: '16',
            options: [
                '16',
                '76',
                '79',
                '19'
            ],
            colorType: 'blue-yellow',
            subtype: 'yellow',
            difficulty: 'medium'
        },
        {
            id: 15,
            correctAnswer: '73',
            options: [
                '73',
                '78',
                '13',
                '18'
            ],
            colorType: 'red-green',
            subtype: 'red-green',
            difficulty: 'hard'
        },
        {
            id: 16,
            correctAnswer: '58',
            options: [
                '58',
                '53',
                '28',
                '23'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'medium'
        },
        {
            id: 17,
            correctAnswer: '18',
            options: [
                '18',
                '73',
                '78',
                '13'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue-yellow',
            difficulty: 'hard'
        },
        {
            id: 18,
            correctAnswer: '9',
            options: [
                '9',
                '6',
                '5',
                '8'
            ],
            colorType: 'total',
            subtype: 'total',
            difficulty: 'medium'
        },
        {
            id: 19,
            correctAnswer: '26',
            options: [
                '26',
                '21',
                '76',
                '71'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'hard'
        },
        {
            id: 20,
            correctAnswer: '4',
            options: [
                '4',
                '7',
                '1',
                '9'
            ],
            colorType: 'red-green',
            subtype: 'red-green',
            difficulty: 'easy'
        }
    ],
    quick: [
        {
            id: 1,
            correctAnswer: '74',
            options: [
                '74',
                '21',
                '14',
                '71'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'easy'
        },
        {
            id: 2,
            correctAnswer: '6',
            options: [
                '6',
                '8',
                '5',
                '9'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'easy'
        },
        {
            id: 3,
            correctAnswer: '7',
            options: [
                '7',
                '1',
                '4',
                '2'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue',
            difficulty: 'easy'
        },
        {
            id: 4,
            correctAnswer: '8',
            options: [
                '8',
                '3',
                '6',
                '9'
            ],
            colorType: 'total',
            subtype: 'total',
            difficulty: 'easy'
        },
        {
            id: 5,
            correctAnswer: '45',
            options: [
                '45',
                '49',
                '15',
                '19'
            ],
            colorType: 'red-green',
            subtype: 'red-green',
            difficulty: 'hard'
        }
    ],
    'red-green': [
        {
            id: 1,
            correctAnswer: '74',
            options: [
                '74',
                '21',
                '14',
                '71'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'easy'
        },
        {
            id: 2,
            correctAnswer: '6',
            options: [
                '6',
                '8',
                '5',
                '9'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'easy'
        },
        {
            id: 3,
            correctAnswer: '29',
            options: [
                '29',
                '70',
                '26',
                '79'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'medium'
        },
        {
            id: 4,
            correctAnswer: '5',
            options: [
                '5',
                '3',
                '8',
                '6'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'medium'
        },
        {
            id: 5,
            correctAnswer: '15',
            options: [
                '15',
                '73',
                '13',
                '75'
            ],
            colorType: 'red-green',
            subtype: 'red-green',
            difficulty: 'hard'
        },
        {
            id: 6,
            correctAnswer: '36',
            options: [
                '36',
                '30',
                '96',
                '90'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'medium'
        },
        {
            id: 7,
            correctAnswer: '2',
            options: [
                '2',
                '5',
                '3',
                '7'
            ],
            colorType: 'red-green',
            subtype: 'red',
            difficulty: 'easy'
        },
        {
            id: 8,
            correctAnswer: '42',
            options: [
                '42',
                '48',
                '12',
                '18'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'medium'
        },
        {
            id: 9,
            correctAnswer: '73',
            options: [
                '73',
                '78',
                '13',
                '18'
            ],
            colorType: 'red-green',
            subtype: 'red-green',
            difficulty: 'hard'
        },
        {
            id: 10,
            correctAnswer: '26',
            options: [
                '26',
                '21',
                '76',
                '71'
            ],
            colorType: 'red-green',
            subtype: 'green',
            difficulty: 'hard'
        }
    ],
    'blue-yellow': [
        {
            id: 1,
            correctAnswer: '7',
            options: [
                '7',
                '1',
                '4',
                '2'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue',
            difficulty: 'easy'
        },
        {
            id: 2,
            correctAnswer: '97',
            options: [
                '97',
                '51',
                '91',
                '57'
            ],
            colorType: 'blue-yellow',
            subtype: 'yellow',
            difficulty: 'hard'
        },
        {
            id: 3,
            correctAnswer: '3',
            options: [
                '3',
                '5',
                '8',
                '6'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue',
            difficulty: 'easy'
        },
        {
            id: 4,
            correctAnswer: '16',
            options: [
                '16',
                '76',
                '79',
                '19'
            ],
            colorType: 'blue-yellow',
            subtype: 'yellow',
            difficulty: 'medium'
        },
        {
            id: 5,
            correctAnswer: '18',
            options: [
                '18',
                '73',
                '78',
                '13'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue-yellow',
            difficulty: 'hard'
        },
        {
            id: 6,
            correctAnswer: '4',
            options: [
                '4',
                '7',
                '1',
                '9'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue',
            difficulty: 'easy'
        },
        {
            id: 7,
            correctAnswer: '52',
            options: [
                '52',
                '57',
                '27',
                '22'
            ],
            colorType: 'blue-yellow',
            subtype: 'yellow',
            difficulty: 'medium'
        },
        {
            id: 8,
            correctAnswer: '9',
            options: [
                '9',
                '6',
                '5',
                '8'
            ],
            colorType: 'blue-yellow',
            subtype: 'blue-yellow',
            difficulty: 'hard'
        }
    ]
};
const testModes = [
    {
        id: 'full',
        name: "\u5168\u9762\u68C0\u6D4B",
        description: "20\u9053\u9898\uFF0C\u5168\u9762\u68C0\u6D4B\u5404\u79CD\u8272\u89C9\u5F02\u5E38",
        icon: "\uD83D\uDD2C"
    },
    {
        id: 'quick',
        name: "\u5FEB\u901F\u7B5B\u67E5",
        description: "5\u9053\u9898\uFF0C\u5FEB\u901F\u5224\u65AD\u662F\u5426\u6709\u8272\u89C9\u95EE\u9898",
        icon: "\u26A1"
    },
    {
        id: 'red-green',
        name: "\u7EA2\u7EFF\u8272\u76F2\u68C0\u6D4B",
        description: "10\u9053\u9898\uFF0C\u4E13\u9879\u68C0\u6D4B\u7EA2\u7EFF\u8272\u89C9\u5F02\u5E38",
        icon: "\uD83D\uDD34\uD83D\uDFE2"
    },
    {
        id: 'blue-yellow',
        name: "\u84DD\u9EC4\u8272\u76F2\u68C0\u6D4B",
        description: "8\u9053\u9898\uFF0C\u4E13\u9879\u68C0\u6D4B\u84DD\u9EC4\u8272\u89C9\u5F02\u5E38",
        icon: "\uD83D\uDD35\uD83D\uDFE1"
    }
];
let currentMode = 'full';
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
function initApp() {
    const app = document.getElementById('app');
    app.innerHTML = `
    <div class="container">
      <div id="startScreen">
        <h1 class="title">\u{8272}\u{76F2}\u{81EA}\u{6D4B}\u{56FE}\u{8C31}</h1>
        <p class="subtitle">\u{8BF7}\u{9009}\u{62E9}\u{6D4B}\u{8BD5}\u{65B9}\u{6848}</p>
        <div class="modeSelector" id="modeSelector"></div>
        <button class="startBtn" id="startBtn" style="margin-top: 20px;">\u{5F00}\u{59CB}\u{6D4B}\u{8BD5}</button>
        <button class="knowledgeBtn" id="knowledgeBtn" style="margin-top: 15px;">\u{1F4DA} \u{8272}\u{76F2}\u{8272}\u{5F31}\u{77E5}\u{8BC6}\u{666E}\u{53CA}</button>
      </div>
      
      <div id="knowledgeScreen" class="knowledgeContainer">
        <div class="knowledgeHeader">
          <h2 class="knowledgeTitle">\u{8272}\u{76F2}\u{8272}\u{5F31}\u{77E5}\u{8BC6}\u{666E}\u{53CA}</h2>
          <button class="backBtn" id="backBtn">\u{2190} \u{8FD4}\u{56DE}</button>
        </div>
        <div class="knowledgeTabs" id="knowledgeTabs"></div>
        <div class="knowledgeContent" id="knowledgeContent"></div>
      </div>
      
      <div id="testScreen" class="testContainer">
        <div class="progressBar">
          <div class="progressFill" id="progressFill"></div>
        </div>
        <p class="questionCount" id="questionCount">\u{7B2C} 1 / 10 \u{9898}</p>
        <div class="imageContainer">
          <canvas id="testCanvas" width="300" height="300"></canvas>
        </div>
        <div class="options" id="options"></div>
        <div id="feedback" class="feedback hidden"></div>
        <button id="nextBtn" class="nextBtn hidden">\u{4E0B}\u{4E00}\u{9898}</button>
      </div>
      
      <div id="resultScreen" class="resultContainer">
        <h2 class="resultTitle">\u{6D4B}\u{8BD5}\u{5B8C}\u{6210}\u{FF01}</h2>
        <div class="scoreDisplay" id="scoreDisplay">8/10</div>
        <div class="diagnosisCard" id="diagnosisCard"></div>
        <div class="evaluation" id="evaluation"></div>
        <button class="restartBtn" id="restartBtn">\u{91CD}\u{65B0}\u{6D4B}\u{8BD5}</button>
      </div>
    </div>
  `;
    renderModeSelector();
    document.getElementById('startBtn').addEventListener('click', startTest);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    document.getElementById('restartBtn').addEventListener('click', restartTest);
    document.getElementById('knowledgeBtn').addEventListener('click', showKnowledge);
    document.getElementById('backBtn').addEventListener('click', hideKnowledge);
}
function renderModeSelector() {
    const selector = document.getElementById('modeSelector');
    selector.innerHTML = testModes.map((mode, index)=>`
    <div class="modeCard ${index === 0 ? 'selected' : ''}" data-mode="${mode.id}">
      <div class="modeIcon">${mode.icon}</div>
      <div class="modeName">${mode.name}</div>
      <div class="modeDesc">${mode.description}</div>
    </div>
  `).join('');
    document.querySelectorAll('.modeCard').forEach((card)=>{
        card.addEventListener('click', ()=>{
            document.querySelectorAll('.modeCard').forEach((c)=>c.classList.remove('selected'));
            card.classList.add('selected');
            currentMode = card.dataset.mode;
        });
    });
}
function generateIshiharaCanvas(canvas, question) {
    const ctx = canvas.getContext('2d');
    const centerX = 150;
    const centerY = 150;
    const radius = 140;
    ctx.clearRect(0, 0, 300, 300);
    const bgColors = generateBackgroundColors(question.colorType);
    const fgColors = generateForegroundColors(question.colorType);
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 300;
    tempCanvas.height = 300;
    const tempCtx = tempCanvas.getContext('2d');
    tempCtx.font = 'bold 120px Arial';
    tempCtx.textAlign = 'center';
    tempCtx.textBaseline = 'middle';
    tempCtx.fillStyle = 'black';
    tempCtx.fillText(question.correctAnswer, centerX, centerY + 10);
    const imageData = tempCtx.getImageData(0, 0, 300, 300);
    const data = imageData.data;
    const fgPoints = [];
    for(let x = 0; x < 300; x += 3)for(let y = 0; y < 300; y += 3){
        const index = (y * 300 + x) * 4;
        if (data[index + 3] > 128) {
            const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
            if (dist < radius) fgPoints.push({
                x,
                y
            });
        }
    }
    const bgPoints = [];
    for(let i = 0; i < 1500; i++){
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * radius;
        const x = Math.floor(centerX + Math.cos(angle) * dist);
        const y = Math.floor(centerY + Math.sin(angle) * dist);
        const index = (y * 300 + x) * 4;
        if (data[index + 3] <= 128) bgPoints.push({
            x,
            y
        });
    }
    bgPoints.forEach((point)=>{
        const dotRadius = 2 + Math.random() * 4;
        ctx.beginPath();
        ctx.arc(point.x, point.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = bgColors[Math.floor(Math.random() * bgColors.length)];
        ctx.fill();
    });
    fgPoints.forEach((point)=>{
        const dotRadius = 3 + Math.random() * 5;
        ctx.beginPath();
        ctx.arc(point.x, point.y, dotRadius, 0, Math.PI * 2);
        ctx.fillStyle = fgColors[Math.floor(Math.random() * fgColors.length)];
        ctx.fill();
    });
}
function generateBackgroundColors(colorType) {
    switch(colorType){
        case 'red-green':
            return [
                '#8B7355',
                '#A0826D',
                '#B89580',
                '#C9A87C',
                '#D4B896',
                '#C4A35A',
                '#B8956E',
                '#A68B5B'
            ];
        case 'blue-yellow':
            return [
                '#7B8B6F',
                '#8F9E7F',
                '#A3B08F',
                '#B7C29F',
                '#9E8B7E',
                '#AE9B8E',
                '#BEAB9E',
                '#CEBBAD'
            ];
        case 'total':
            return [
                '#6B6B6B',
                '#7B7B7B',
                '#8B8B8B',
                '#9B9B9B',
                '#ABABAB',
                '#BBBBBB',
                '#CBCBCB',
                '#DBDBDB'
            ];
        default:
            return [
                '#8B7355',
                '#A0826D',
                '#B89580',
                '#C9A87C'
            ];
    }
}
function generateForegroundColors(colorType) {
    switch(colorType){
        case 'red-green':
            return [
                '#CD5C5C',
                '#D2691E',
                '#DAA520',
                '#B8860B',
                '#CD853F',
                '#D2B48C',
                '#BC8F8F',
                '#C04000'
            ];
        case 'blue-yellow':
            return [
                '#4169E1',
                '#1E90FF',
                '#00BFFF',
                '#87CEEB',
                '#4682B4',
                '#5F9EA0',
                '#6495ED',
                '#7B68EE'
            ];
        case 'total':
            return [
                '#2F2F2F',
                '#3F3F3F',
                '#4F4F4F',
                '#5F5F5F',
                '#1F1F1F',
                '#0F0F0F',
                '#000000',
                '#1A1A1A'
            ];
        default:
            return [
                '#CD5C5C',
                '#D2691E',
                '#DAA520',
                '#B8860B'
            ];
    }
}
function startTest() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('testScreen').classList.add('active');
    showQuestion();
}
function showQuestion() {
    const questions = testQuestions[currentMode];
    const question = questions[currentQuestionIndex];
    const progress = (currentQuestionIndex + 1) / questions.length * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
    document.getElementById('questionCount').textContent = `\u{7B2C} ${currentQuestionIndex + 1} / ${questions.length} \u{9898}`;
    const canvas = document.getElementById('testCanvas');
    generateIshiharaCanvas(canvas, question);
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    const shuffledOptions = [
        ...question.options
    ].sort(()=>Math.random() - 0.5);
    shuffledOptions.forEach((option)=>{
        const btn = document.createElement('button');
        btn.className = 'optionBtn';
        btn.textContent = option;
        btn.addEventListener('click', ()=>selectAnswer(option));
        optionsContainer.appendChild(btn);
    });
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('nextBtn').classList.add('hidden');
}
function selectAnswer(answer) {
    const questions = testQuestions[currentMode];
    const question = questions[currentQuestionIndex];
    const isCorrect = answer === question.correctAnswer;
    const buttons = document.querySelectorAll('.optionBtn');
    buttons.forEach((btn)=>{
        btn.disabled = true;
        if (btn.textContent === question.correctAnswer) btn.classList.add('correct');
        else if (btn.textContent === answer && !isCorrect) btn.classList.add('wrong');
    });
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden');
    if (isCorrect) {
        score++;
        feedback.textContent = "\u2713 \u56DE\u7B54\u6B63\u786E\uFF01";
        feedback.className = 'feedback correct';
    } else {
        feedback.textContent = `\u{2717} \u{56DE}\u{7B54}\u{9519}\u{8BEF}\u{FF01}\u{6B63}\u{786E}\u{7B54}\u{6848}\u{662F} ${question.correctAnswer}`;
        feedback.className = 'feedback wrong';
    }
    userAnswers.push({
        questionId: question.id,
        answer: answer,
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect,
        colorType: question.colorType,
        subtype: question.subtype,
        difficulty: question.difficulty
    });
    document.getElementById('nextBtn').classList.remove('hidden');
}
function nextQuestion() {
    const questions = testQuestions[currentMode];
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) showQuestion();
    else showResults();
}
function showResults() {
    const questions = testQuestions[currentMode];
    document.getElementById('testScreen').classList.remove('active');
    document.getElementById('resultScreen').classList.add('active');
    document.getElementById('scoreDisplay').textContent = `${score} / ${questions.length}`;
    const diagnosis = generateDetailedDiagnosis();
    document.getElementById('diagnosisCard').innerHTML = `
    <div class="diagnosisIcon">${diagnosis.icon}</div>
    <div class="diagnosisTitle">${diagnosis.title}</div>
    <div class="diagnosisSeverity">${diagnosis.severity}</div>
  `;
    document.getElementById('diagnosisCard').className = `diagnosisCard ${diagnosis.type}`;
    document.getElementById('evaluation').innerHTML = `
    <h3>\u{8BE6}\u{7EC6}\u{5206}\u{6790}</h3>
    <div class="analysisDetails">
      ${diagnosis.details.map((detail)=>`
        <div class="analysisItem">
          <span class="analysisLabel">${detail.label}</span>
          <span class="analysisValue">${detail.value}</span>
        </div>
      `).join('')}
    </div>
    <p style="margin-top: 20px;">${diagnosis.description}</p>
    <p style="margin-top: 15px; font-size: 14px; color: #888; border-top: 1px solid #eee; padding-top: 15px;">
      \u{26A0}\u{FE0F} \u{6CE8}\u{FF1A}\u{6B64}\u{6D4B}\u{8BD5}\u{4EC5}\u{4F9B}\u{53C2}\u{8003}\u{FF0C}\u{4E0D}\u{80FD}\u{66FF}\u{4EE3}\u{4E13}\u{4E1A}\u{533B}\u{7597}\u{8BCA}\u{65AD}\u{3002}\u{5982}\u{6709}\u{7591}\u{8651}\u{FF0C}\u{8BF7}\u{54A8}\u{8BE2}\u{4E13}\u{4E1A}\u{533B}\u{751F}\u{3002}
    </p>
  `;
}
function generateDetailedDiagnosis() {
    const questions = testQuestions[currentMode];
    const totalQuestions = questions.length;
    const percentage = score / totalQuestions * 100;
    const redGreenAnswers = userAnswers.filter((a)=>a.colorType === 'red-green');
    const blueYellowAnswers = userAnswers.filter((a)=>a.colorType === 'blue-yellow');
    const totalAnswers = userAnswers.filter((a)=>a.colorType === 'total');
    const redGreenWrong = redGreenAnswers.filter((a)=>!a.isCorrect).length;
    const blueYellowWrong = blueYellowAnswers.filter((a)=>!a.isCorrect).length;
    const totalWrong = totalAnswers.filter((a)=>!a.isCorrect).length;
    const redWrong = userAnswers.filter((a)=>a.subtype === 'red' && !a.isCorrect).length;
    const greenWrong = userAnswers.filter((a)=>a.subtype === 'green' && !a.isCorrect).length;
    const blueWrong = userAnswers.filter((a)=>a.subtype === 'blue' && !a.isCorrect).length;
    const yellowWrong = userAnswers.filter((a)=>a.subtype === 'yellow' && !a.isCorrect).length;
    const easyWrong = userAnswers.filter((a)=>a.difficulty === 'easy' && !a.isCorrect).length;
    const mediumWrong = userAnswers.filter((a)=>a.difficulty === 'medium' && !a.isCorrect).length;
    const hardWrong = userAnswers.filter((a)=>a.difficulty === 'hard' && !a.isCorrect).length;
    let diagnosis = {
        title: '',
        severity: '',
        icon: '',
        type: '',
        description: '',
        details: []
    };
    diagnosis.details.push({
        label: "\u603B\u6B63\u786E\u7387",
        value: `${Math.round(percentage)}%`
    });
    if (redGreenAnswers.length > 0) {
        const rgCorrect = redGreenAnswers.filter((a)=>a.isCorrect).length;
        const rgPercent = Math.round(rgCorrect / redGreenAnswers.length * 100);
        diagnosis.details.push({
            label: "\u7EA2\u7EFF\u8272\u7CFB\u6B63\u786E\u7387",
            value: `${rgPercent}%`
        });
    }
    if (blueYellowAnswers.length > 0) {
        const byCorrect = blueYellowAnswers.filter((a)=>a.isCorrect).length;
        const byPercent = Math.round(byCorrect / blueYellowAnswers.length * 100);
        diagnosis.details.push({
            label: "\u84DD\u9EC4\u8272\u7CFB\u6B63\u786E\u7387",
            value: `${byPercent}%`
        });
    }
    if (percentage >= 85) {
        diagnosis.title = "\u8272\u89C9\u6B63\u5E38";
        diagnosis.severity = "\u60A8\u7684\u8272\u5F69\u611F\u77E5\u80FD\u529B\u826F\u597D";
        diagnosis.icon = "\u2705";
        diagnosis.type = 'normal';
        diagnosis.description = "\u60A8\u80FD\u591F\u51C6\u786E\u5206\u8FA8\u5404\u79CD\u989C\u8272\uFF0C\u8272\u89C9\u529F\u80FD\u5B8C\u5168\u6B63\u5E38\u3002\u5728\u65E5\u5E38\u751F\u6D3B\u548C\u5DE5\u4F5C\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u8F7B\u677E\u5B8C\u6210\u5404\u79CD\u9700\u8981\u989C\u8272\u5224\u65AD\u7684\u4EFB\u52A1\u3002";
    } else if (percentage >= 65) {
        let issues = [];
        if (redGreenWrong >= 2) {
            if (redWrong > greenWrong) issues.push("\u8F7B\u5EA6\u7EA2\u8272\u5F31");
            else if (greenWrong > redWrong) issues.push("\u8F7B\u5EA6\u7EFF\u8272\u5F31");
            else issues.push("\u8F7B\u5EA6\u7EA2\u7EFF\u8272\u5F31");
        }
        if (blueYellowWrong >= 1) {
            if (blueWrong > yellowWrong) issues.push("\u8F7B\u5EA6\u84DD\u8272\u5F31");
            else if (yellowWrong > blueWrong) issues.push("\u8F7B\u5EA6\u9EC4\u8272\u5F31");
            else issues.push("\u8F7B\u5EA6\u84DD\u9EC4\u8272\u5F31");
        }
        diagnosis.title = issues.length > 0 ? issues.join(' / ') : "\u8F7B\u5EA6\u8272\u89C9\u5F02\u5E38";
        diagnosis.severity = "\u8F7B\u5EA6\u8272\u89C9\u5F02\u5E38";
        diagnosis.icon = "\u26A0\uFE0F";
        diagnosis.type = 'mild';
        diagnosis.description = "\u60A8\u5728\u67D0\u4E9B\u7279\u5B9A\u989C\u8272\u7684\u5206\u8FA8\u4E0A\u53EF\u80FD\u5B58\u5728\u8F7B\u5FAE\u56F0\u96BE\uFF0C\u4F46\u8FD9\u901A\u5E38\u4E0D\u4F1A\u5F71\u54CD\u65E5\u5E38\u751F\u6D3B\u3002\u5728\u9700\u8981\u7CBE\u786E\u989C\u8272\u5224\u65AD\u7684\u5DE5\u4F5C\uFF08\u5982\u8BBE\u8BA1\u3001\u7F8E\u672F\u7B49\uFF09\u4E2D\uFF0C\u5EFA\u8BAE\u4F7F\u7528\u8F85\u52A9\u5DE5\u5177\u6216\u5BFB\u6C42\u4ED6\u4EBA\u5E2E\u52A9\u3002";
    } else if (percentage >= 45) {
        let issues = [];
        if (redGreenWrong >= 3) {
            if (redWrong >= greenWrong) issues.push("\u7EA2\u8272\u76F2");
            else issues.push("\u7EFF\u8272\u76F2");
        }
        if (blueYellowWrong >= 2) issues.push("\u84DD\u9EC4\u8272\u76F2");
        diagnosis.title = issues.length > 0 ? issues.join(' / ') : "\u4E2D\u5EA6\u8272\u89C9\u5F02\u5E38";
        diagnosis.severity = "\u4E2D\u5EA6\u8272\u89C9\u5F02\u5E38";
        diagnosis.icon = "\uD83D\uDD36";
        diagnosis.type = 'moderate';
        diagnosis.description = "\u60A8\u5B58\u5728\u8F83\u660E\u663E\u7684\u8272\u89C9\u5F02\u5E38\uFF0C\u53EF\u80FD\u4F1A\u5BF9\u67D0\u4E9B\u9700\u8981\u989C\u8272\u5224\u65AD\u7684\u5DE5\u4F5C\u6216\u6D3B\u52A8\u9020\u6210\u5F71\u54CD\u3002\u5EFA\u8BAE\u54A8\u8BE2\u4E13\u4E1A\u773C\u79D1\u533B\u751F\uFF0C\u4E86\u89E3\u66F4\u591A\u5173\u4E8E\u8272\u89C9\u5F02\u5E38\u7684\u4FE1\u606F\u548C\u5E94\u5BF9\u65B9\u6CD5\u3002";
    } else if (totalWrong > 0) {
        diagnosis.title = "\u5168\u8272\u76F2";
        diagnosis.severity = "\u91CD\u5EA6\u8272\u89C9\u5F02\u5E38";
        diagnosis.icon = "\uD83D\uDD34";
        diagnosis.type = 'severe';
        diagnosis.description = "\u60A8\u53EF\u80FD\u5B58\u5728\u5168\u8272\u76F2\u6216\u91CD\u5EA6\u8272\u89C9\u5F02\u5E38\uFF0C\u4E16\u754C\u5BF9\u60A8\u6765\u8BF4\u53EF\u80FD\u4E3B\u8981\u5448\u73B0\u4E0D\u540C\u4EAE\u5EA6\u7684\u7070\u8272\u3002\u5F3A\u70C8\u5EFA\u8BAE\u60A8\u524D\u5F80\u533B\u9662\u773C\u79D1\u8FDB\u884C\u4E13\u4E1A\u68C0\u67E5\u548C\u8BCA\u65AD\uFF0C\u4EE5\u4FBF\u83B7\u5F97\u66F4\u8BE6\u7EC6\u7684\u4FE1\u606F\u548C\u4E13\u4E1A\u5EFA\u8BAE\u3002";
    } else {
        diagnosis.title = "\u91CD\u5EA6\u7EA2\u7EFF\u8272\u76F2";
        diagnosis.severity = "\u91CD\u5EA6\u8272\u89C9\u5F02\u5E38";
        diagnosis.icon = "\uD83D\uDD34";
        diagnosis.type = 'severe';
        diagnosis.description = "\u60A8\u5B58\u5728\u8F83\u91CD\u7684\u8272\u89C9\u5F02\u5E38\uFF0C\u7279\u522B\u662F\u5728\u7EA2\u7EFF\u8272\u7CFB\u7684\u5206\u8FA8\u4E0A\u53EF\u80FD\u6709\u660E\u663E\u56F0\u96BE\u3002\u8FD9\u53EF\u80FD\u4F1A\u5BF9\u60A8\u7684\u804C\u4E1A\u9009\u62E9\u548C\u65E5\u5E38\u751F\u6D3B\u4EA7\u751F\u4E00\u5B9A\u5F71\u54CD\u3002\u5EFA\u8BAE\u60A8\u54A8\u8BE2\u4E13\u4E1A\u773C\u79D1\u533B\u751F\uFF0C\u4E86\u89E3\u9002\u5408\u60A8\u7684\u804C\u4E1A\u9009\u62E9\u548C\u751F\u6D3B\u5EFA\u8BAE\u3002";
    }
    return diagnosis;
}
function restartTest() {
    document.getElementById('resultScreen').classList.remove('active');
    document.getElementById('startScreen').style.display = 'block';
}
const knowledgeData = [
    {
        id: 'overview',
        title: "\u4EC0\u4E48\u662F\u8272\u76F2\u8272\u5F31",
        icon: "\uD83D\uDC41\uFE0F",
        content: `
      <h3>\u{57FA}\u{672C}\u{6982}\u{5FF5}</h3>
      <p><strong>\u{8272}\u{76F2}</strong>\u{FF1A}\u{6307}\u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{67D0}\u{4E9B}\u{6216}\u{5168}\u{90E8}\u{989C}\u{8272}\u{FF0C}\u{662F}\u{4E00}\u{79CD}\u{4E25}\u{91CD}\u{7684}\u{8272}\u{89C9}\u{969C}\u{788D}\u{3002}</p>
      <p><strong>\u{8272}\u{5F31}</strong>\u{FF1A}\u{6307}\u{5206}\u{8FA8}\u{989C}\u{8272}\u{7684}\u{80FD}\u{529B}\u{964D}\u{4F4E}\u{FF0C}\u{6BD4}\u{8272}\u{76F2}\u{7A0B}\u{5EA6}\u{8F7B}\u{3002}</p>
      
      <h3>\u{60A3}\u{75C5}\u{7387}</h3>
      <p>\u{2022} \u{7537}\u{6027}\u{7EA2}\u{7EFF}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{60A3}\u{75C5}\u{7387}\u{7EA6}\u{4E3A} 5-8%</p>
      <p>\u{2022} \u{5973}\u{6027}\u{7EA2}\u{7EFF}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{60A3}\u{75C5}\u{7387}\u{7EA6}\u{4E3A} 0.5-1%</p>
      <p>\u{2022} \u{84DD}\u{9EC4}\u{8272}\u{76F2}\u{7F55}\u{89C1}\u{FF0C}\u{7537}\u{5973}\u{60A3}\u{75C5}\u{7387}\u{76F8}\u{8FD1}\u{FF08}\u{7EA6} 0.01%\u{FF09}</p>
      <p>\u{2022} \u{5168}\u{8272}\u{76F2}\u{6781}\u{4E3A}\u{7F55}\u{89C1}\u{FF08}\u{7EA6} 1/33000\u{FF09}</p>
      
      <h3>\u{4E3A}\u{4EC0}\u{4E48}\u{7537}\u{6027}\u{66F4}\u{5BB9}\u{6613}\u{8272}\u{76F2}\u{FF1F}</h3>
      <p>\u{7EA2}\u{7EFF}\u{8272}\u{76F2}\u{7684}\u{57FA}\u{56E0}\u{4F4D}\u{4E8E} X \u{67D3}\u{8272}\u{4F53}\u{4E0A}\u{FF0C}\u{7537}\u{6027}\u{53EA}\u{6709}\u{4E00}\u{6761} X \u{67D3}\u{8272}\u{4F53}\u{FF0C}\u{53EA}\u{8981}\u{643A}\u{5E26}\u{81F4}\u{75C5}\u{57FA}\u{56E0}\u{5C31}\u{4F1A}\u{8868}\u{73B0}\u{51FA}\u{8272}\u{76F2}\u{FF1B}\u{800C}\u{5973}\u{6027}\u{6709}\u{4E24}\u{6761} X \u{67D3}\u{8272}\u{4F53}\u{FF0C}\u{9700}\u{8981}\u{4E24}\u{6761}\u{90FD}\u{643A}\u{5E26}\u{81F4}\u{75C5}\u{57FA}\u{56E0}\u{624D}\u{4F1A}\u{8868}\u{73B0}\u{51FA}\u{8272}\u{76F2}\u{FF0C}\u{56E0}\u{6B64}\u{60A3}\u{75C5}\u{7387}\u{8FDC}\u{4F4E}\u{4E8E}\u{7537}\u{6027}\u{3002}</p>
    `
    },
    {
        id: 'causes',
        title: "\u5F62\u6210\u539F\u56E0",
        icon: "\uD83D\uDD2C",
        content: `
      <h3>1. \u{5148}\u{5929}\u{6027}\u{9057}\u{4F20}\u{FF08}\u{6700}\u{5E38}\u{89C1}\u{FF09}</h3>
      <p><strong>\u{9057}\u{4F20}\u{65B9}\u{5F0F}\u{FF1A}</strong></p>
      <p>\u{2022} \u{7EA2}\u{7EFF}\u{8272}\u{76F2}\u{FF1A}X \u{67D3}\u{8272}\u{4F53}\u{9690}\u{6027}\u{9057}\u{4F20}</p>
      <p>\u{2022} \u{84DD}\u{9EC4}\u{8272}\u{76F2}\u{FF1A}\u{5E38}\u{67D3}\u{8272}\u{4F53}\u{663E}\u{6027}\u{9057}\u{4F20}</p>
      <p>\u{2022} \u{5168}\u{8272}\u{76F2}\u{FF1A}\u{5E38}\u{67D3}\u{8272}\u{4F53}\u{9690}\u{6027}\u{9057}\u{4F20}</p>
      
      <p><strong>\u{751F}\u{7406}\u{673A}\u{5236}\u{FF1A}</strong></p>
      <p>\u{4EBA}\u{773C}\u{89C6}\u{7F51}\u{819C}\u{6709}\u{4E09}\u{79CD}\u{89C6}\u{9525}\u{7EC6}\u{80DE}\u{FF0C}\u{5206}\u{522B}\u{5BF9}\u{7EA2}\u{3001}\u{7EFF}\u{3001}\u{84DD}\u{4E09}\u{79CD}\u{6CE2}\u{957F}\u{7684}\u{5149}\u{654F}\u{611F}\u{3002}\u{5982}\u{679C}\u{67D0}\u{79CD}\u{89C6}\u{9525}\u{7EC6}\u{80DE}\u{7F3A}\u{5931}\u{6216}\u{529F}\u{80FD}\u{5F02}\u{5E38}\u{FF0C}\u{5C31}\u{4F1A}\u{5BFC}\u{81F4}\u{76F8}\u{5E94}\u{7684}\u{8272}\u{89C9}\u{969C}\u{788D}\u{3002}</p>
      
      <h3>2. \u{540E}\u{5929}\u{6027}\u{56E0}\u{7D20}</h3>
      <p><strong>\u{75BE}\u{75C5}\u{FF1A}</strong></p>
      <p>\u{2022} \u{89C6}\u{7F51}\u{819C}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{89C6}\u{7F51}\u{819C}\u{8131}\u{79BB}\u{3001}\u{9EC4}\u{6591}\u{75C5}\u{53D8}\u{FF09}</p>
      <p>\u{2022} \u{89C6}\u{795E}\u{7ECF}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{89C6}\u{795E}\u{7ECF}\u{708E}\u{3001}\u{89C6}\u{795E}\u{7ECF}\u{840E}\u{7F29}\u{FF09}</p>
      <p>\u{2022} \u{8111}\u{90E8}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{8111}\u{5352}\u{4E2D}\u{3001}\u{8111}\u{5916}\u{4F24}\u{FF09}</p>
      <p>\u{2022} \u{5168}\u{8EAB}\u{6027}\u{75BE}\u{75C5}\u{FF08}\u{5982}\u{7CD6}\u{5C3F}\u{75C5}\u{3001}\u{7EF4}\u{751F}\u{7D20}\u{7F3A}\u{4E4F}\u{FF09}</p>
      
      <p><strong>\u{836F}\u{7269}/\u{5316}\u{5B66}\u{7269}\u{8D28}\u{FF1A}</strong></p>
      <p>\u{2022} \u{67D0}\u{4E9B}\u{836F}\u{7269}\u{FF08}\u{5982}\u{6D0B}\u{5730}\u{9EC4}\u{3001}\u{4E59}\u{80FA}\u{4E01}\u{9187}\u{FF09}</p>
      <p>\u{2022} \u{67D0}\u{4E9B}\u{5316}\u{5B66}\u{7269}\u{8D28}\u{FF08}\u{5982}\u{4E8C}\u{786B}\u{5316}\u{78B3}\u{3001}\u{7532}\u{9187}\u{FF09}</p>
      
      <p><strong>\u{5E74}\u{9F84}\u{FF1A}</strong></p>
      <p>\u{2022} \u{8001}\u{5E74}\u{4EBA}\u{6676}\u{72B6}\u{4F53}\u{53D8}\u{9EC4}\u{FF0C}\u{5BF9}\u{84DD}\u{8272}\u{7684}\u{5206}\u{8FA8}\u{80FD}\u{529B}\u{4E0B}\u{964D}</p>
    `
    },
    {
        id: 'types',
        title: "\u7C7B\u578B\u53CA\u75C7\u72B6",
        icon: "\uD83C\uDFA8",
        content: `
      <h3>\u{7EA2}\u{7EFF}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{FF08}\u{6700}\u{5E38}\u{89C1}\u{FF09}</h3>
      
      <p><strong>\u{1F534} \u{7EA2}\u{8272}\u{76F2}\u{FF08}Protanopia\u{FF09}\u{FF1A}</strong></p>
      <p>\u{2022} \u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{7EA2}\u{8272}\u{548C}\u{6DF1}\u{7EFF}\u{8272}\u{3001}\u{84DD}\u{8272}\u{548C}\u{7D2B}\u{7EA2}\u{8272}\u{3001}\u{7D2B}\u{8272}\u{548C}\u{84DD}\u{8272}</p>
      <p>\u{2022} \u{7EFF}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{9EC4}\u{8272}\u{FF0C}\u{7EA2}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{6697}\u{7070}\u{8272}</p>
      <p>\u{2022} \u{5BF9}\u{7EA2}\u{5149}\u{7684}\u{654F}\u{611F}\u{5EA6}\u{964D}\u{4F4E}</p>
      
      <p><strong>\u{1F7E2} \u{7EFF}\u{8272}\u{76F2}\u{FF08}Deuteranopia\u{FF09}\u{FF1A}</strong></p>
      <p>\u{2022} \u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{6DE1}\u{7EFF}\u{8272}\u{548C}\u{6DF1}\u{7EA2}\u{8272}\u{3001}\u{7D2B}\u{8272}\u{548C}\u{9752}\u{84DD}\u{8272}\u{3001}\u{7D2B}\u{7EA2}\u{8272}\u{548C}\u{7070}\u{8272}</p>
      <p>\u{2022} \u{7EFF}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{6697}\u{7070}\u{8272}\u{6216}\u{6DE1}\u{9EC4}\u{8272}</p>
      <p>\u{2022} \u{662F}\u{6700}\u{5E38}\u{89C1}\u{7684}\u{8272}\u{76F2}\u{7C7B}\u{578B}</p>
      
      <p><strong>\u{1F534}\u{1F7E2} \u{7EA2}\u{7EFF}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5206}\u{8FA8}\u{7EA2}\u{7EFF}\u{8272}\u{7684}\u{80FD}\u{529B}\u{964D}\u{4F4E}</p>
      <p>\u{2022} \u{5728}\u{5149}\u{7EBF}\u{4E0D}\u{8DB3}\u{6216}\u{989C}\u{8272}\u{76F8}\u{8FD1}\u{65F6}\u{66F4}\u{96BE}\u{5206}\u{8FA8}</p>
      <p>\u{2022} \u{7A0B}\u{5EA6}\u{8F7B}\u{91CD}\u{4E0D}\u{4E00}</p>
      
      <h3>\u{84DD}\u{9EC4}\u{8272}\u{76F2}/\u{8272}\u{5F31}\u{FF08}\u{7F55}\u{89C1}\u{FF09}</h3>
      
      <p><strong>\u{1F535} \u{84DD}\u{8272}\u{76F2}\u{FF08}Tritanopia\u{FF09}\u{FF1A}</strong></p>
      <p>\u{2022} \u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{84DD}\u{8272}\u{548C}\u{9EC4}\u{8272}\u{3001}\u{7EFF}\u{8272}\u{548C}\u{84DD}\u{7EFF}\u{8272}\u{3001}\u{7D2B}\u{8272}\u{548C}\u{7EA2}\u{8272}</p>
      <p>\u{2022} \u{84DD}\u{8272}\u{770B}\u{8D77}\u{6765}\u{50CF}\u{9ED1}\u{8272}</p>
      
      <p><strong>\u{1F7E1} \u{84DD}\u{9EC4}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5206}\u{8FA8}\u{84DD}\u{9EC4}\u{8272}\u{7684}\u{80FD}\u{529B}\u{964D}\u{4F4E}</p>
      
      <h3>\u{5168}\u{8272}\u{76F2}\u{FF08}\u{6781}\u{7F55}\u{89C1}\u{FF09}</h3>
      <p>\u{2022} \u{5B8C}\u{5168}\u{4E0D}\u{80FD}\u{5206}\u{8FA8}\u{4EFB}\u{4F55}\u{989C}\u{8272}</p>
      <p>\u{2022} \u{4E16}\u{754C}\u{53EA}\u{6709}\u{9ED1}\u{767D}\u{7070}\u{4E0D}\u{540C}\u{4EAE}\u{5EA6}\u{7684}\u{533A}\u{522B}</p>
      <p>\u{2022} \u{5E38}\u{4F34}\u{6709}\u{89C6}\u{529B}\u{4F4E}\u{4E0B}\u{3001}\u{754F}\u{5149}\u{3001}\u{773C}\u{7403}\u{9707}\u{98A4}\u{7B49}\u{75C7}\u{72B6}</p>
    `
    },
    {
        id: 'impact',
        title: "\u751F\u6D3B\u5F71\u54CD",
        icon: "\uD83C\uDFE0",
        content: `
      <h3>\u{65E5}\u{5E38}\u{751F}\u{6D3B}</h3>
      <p><strong>\u{4EA4}\u{901A}\u{51FA}\u{884C}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5206}\u{8FA8}\u{7EA2}\u{7EFF}\u{706F}\u{53EF}\u{80FD}\u{6709}\u{56F0}\u{96BE}\u{FF08}\u{5C24}\u{5176}\u{662F}\u{7EA2}\u{8272}\u{76F2}\u{FF09}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{8BB0}\u{4F4F}\u{7EA2}\u{7EFF}\u{706F}\u{4F4D}\u{7F6E}\u{FF08}\u{4E0A}\u{7EA2}\u{4E0B}\u{7EFF}\u{FF09}\u{FF0C}\u{6216}\u{89C2}\u{5BDF}\u{4ED6}\u{4EBA}\u{884C}\u{52A8}</p>
      
      <p><strong>\u{7A7F}\u{642D}\u{642D}\u{914D}\u{FF1A}</strong></p>
      <p>\u{2022} \u{7EA2}\u{7EFF}\u{8272}\u{7CFB}\u{642D}\u{914D}\u{53EF}\u{80FD}\u{51FA}\u{9519}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{4F7F}\u{7528}\u{914D}\u{8272} APP \u{8F85}\u{52A9}\u{FF0C}\u{6216}\u{8BF7}\u{5BB6}\u{4EBA}\u{670B}\u{53CB}\u{5E2E}\u{5FD9}\u{53C2}\u{8003}</p>
      
      <p><strong>\u{996E}\u{98DF}\u{FF1A}</strong></p>
      <p>\u{2022} \u{96BE}\u{4EE5}\u{901A}\u{8FC7}\u{989C}\u{8272}\u{5224}\u{65AD}\u{98DF}\u{7269}\u{662F}\u{5426}\u{65B0}\u{9C9C}\u{3001}\u{6C34}\u{679C}\u{662F}\u{5426}\u{6210}\u{719F}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{901A}\u{8FC7}\u{624B}\u{611F}\u{3001}\u{6C14}\u{5473}\u{7B49}\u{5176}\u{4ED6}\u{65B9}\u{5F0F}\u{5224}\u{65AD}</p>
      
      <h3>\u{6559}\u{80B2}\u{4E0E}\u{804C}\u{4E1A}</h3>
      <p><strong>\u{4E13}\u{4E1A}\u{9650}\u{5236}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5316}\u{5DE5}\u{3001}\u{533B}\u{5B66}\u{3001}\u{7F8E}\u{672F}\u{3001}\u{8BBE}\u{8BA1}\u{3001}\u{98DE}\u{884C}\u{5458}\u{3001}\u{9A7E}\u{9A76}\u{5458}\u{7B49}\u{4E13}\u{4E1A}/\u{804C}\u{4E1A}\u{53EF}\u{80FD}\u{53D7}\u{9650}</p>
      <p>\u{2022} \u{5177}\u{4F53}\u{8981}\u{6C42}\u{8BF7}\u{53C2}\u{8003}\u{76F8}\u{5173}\u{884C}\u{4E1A}\u{6807}\u{51C6}</p>
      
      <p><strong>\u{5B66}\u{4E60}\u{5F71}\u{54CD}\u{FF1A}</strong></p>
      <p>\u{2022} \u{5F69}\u{8272}\u{56FE}\u{8868}\u{3001}\u{5730}\u{56FE}\u{53EF}\u{80FD}\u{7406}\u{89E3}\u{56F0}\u{96BE}</p>
      <p>\u{2022} \u{5EFA}\u{8BAE}\u{FF1A}\u{63D0}\u{524D}\u{544A}\u{77E5}\u{8001}\u{5E08}\u{FF0C}\u{5BFB}\u{6C42}\u{9002}\u{5F53}\u{8C03}\u{6574}</p>
      
      <h3>\u{5FC3}\u{7406}\u{5F71}\u{54CD}</h3>
      <p>\u{2022} \u{513F}\u{7AE5}\u{53EF}\u{80FD}\u{56E0}"\u{4E0E}\u{4F17}\u{4E0D}\u{540C}"\u{4EA7}\u{751F}\u{81EA}\u{5351}\u{5FC3}\u{7406}</p>
      <p>\u{2022} \u{5BB6}\u{957F}\u{548C}\u{8001}\u{5E08}\u{5E94}\u{7ED9}\u{4E88}\u{7406}\u{89E3}\u{548C}\u{9F13}\u{52B1}</p>
      <p>\u{2022} \u{8272}\u{76F2}\u{8272}\u{5F31}\u{4E0D}\u{662F}"\u{7F3A}\u{9677}"\u{FF0C}\u{53EA}\u{662F}\u{4E00}\u{79CD}\u{4E0D}\u{540C}\u{7684}\u{89C6}\u{89C9}\u{4F53}\u{9A8C}</p>
    `
    },
    {
        id: 'help',
        title: "\u8F85\u52A9\u4E0E\u6CBB\u7597",
        icon: "\uD83D\uDCA1",
        content: `
      <h3>\u{8F85}\u{52A9}\u{5DE5}\u{5177}</h3>
      
      <p><strong>\u{8272}\u{76F2}\u{77EB}\u{6B63}\u{773C}\u{955C}\u{FF1A}</strong></p>
      <p>\u{2022} \u{539F}\u{7406}\u{FF1A}\u{901A}\u{8FC7}\u{7279}\u{6B8A}\u{9540}\u{819C}\u{8FC7}\u{6EE4}\u{90E8}\u{5206}\u{6CE2}\u{957F}\u{7684}\u{5149}\u{FF0C}\u{589E}\u{52A0}\u{989C}\u{8272}\u{5BF9}\u{6BD4}\u{5EA6}</p>
      <p>\u{2022} \u{6548}\u{679C}\u{FF1A}\u{5BF9}\u{7EA2}\u{7EFF}\u{8272}\u{5F31}/\u{8272}\u{76F2}\u{6709}\u{4E00}\u{5B9A}\u{5E2E}\u{52A9}\u{FF0C}\u{4F46}\u{4E0D}\u{80FD}"\u{6CBB}\u{6108}"\u{8272}\u{76F2}</p>
      <p>\u{2022} \u{6CE8}\u{610F}\u{FF1A}\u{4F69}\u{6234}\u{540E}\u{770B}\u{5230}\u{7684}\u{989C}\u{8272}\u{4E0E}\u{6B63}\u{5E38}\u{4EBA}\u{4E5F}\u{6709}\u{5DEE}\u{5F02}\u{FF0C}\u{9700}\u{8981}\u{9002}\u{5E94}\u{671F}</p>
      
      <p><strong>\u{624B}\u{673A} APP \u{8F85}\u{52A9}\u{FF1A}</strong></p>
      <p>\u{2022} \u{989C}\u{8272}\u{8BC6}\u{522B} APP\u{FF1A}\u{62CD}\u{7167}\u{540E}\u{544A}\u{8BC9}\u{4F60}\u{662F}\u{4EC0}\u{4E48}\u{989C}\u{8272}</p>
      <p>\u{2022} \u{914D}\u{8272}\u{8F85}\u{52A9} APP\u{FF1A}\u{5E2E}\u{52A9}\u{9009}\u{62E9}\u{534F}\u{8C03}\u{7684}\u{7A7F}\u{642D}\u{8272}\u{5F69}</p>
      
      <p><strong>\u{5176}\u{4ED6}\u{8F85}\u{52A9}\u{FF1A}</strong></p>
      <p>\u{2022} \u{7ED9}\u{8863}\u{7269}\u{3001}\u{7269}\u{54C1}\u{505A}\u{6807}\u{7B7E}\u{6807}\u{8BB0}</p>
      <p>\u{2022} \u{4F7F}\u{7528}\u{9AD8}\u{5BF9}\u{6BD4}\u{5EA6}\u{7684}\u{914D}\u{8272}\u{65B9}\u{6848}</p>
      
      <h3>\u{76EE}\u{524D}\u{80FD}\u{6CBB}\u{6108}\u{5417}\u{FF1F}</h3>
      
      <p><strong>\u{5148}\u{5929}\u{6027}\u{8272}\u{76F2}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{76EE}\u{524D}\u{5C1A}\u{65E0}\u{6CBB}\u{6108}\u{65B9}\u{6CD5}</p>
      <p>\u{2022} \u{57FA}\u{56E0}\u{6CBB}\u{7597}\u{6B63}\u{5728}\u{7814}\u{7A76}\u{4E2D}\u{FF0C}\u{5DF2}\u{6709}\u{52A8}\u{7269}\u{5B9E}\u{9A8C}\u{6210}\u{529F}\u{6848}\u{4F8B}</p>
      <p>\u{2022} \u{672A}\u{6765}\u{53EF}\u{80FD}\u{901A}\u{8FC7}\u{57FA}\u{56E0}\u{7F16}\u{8F91}\u{6280}\u{672F}\u{6CBB}\u{7597}</p>
      
      <p><strong>\u{540E}\u{5929}\u{6027}\u{8272}\u{76F2}\u{8272}\u{5F31}\u{FF1A}</strong></p>
      <p>\u{2022} \u{9488}\u{5BF9}\u{539F}\u{53D1}\u{75C5}\u{6CBB}\u{7597}\u{FF0C}\u{90E8}\u{5206}\u{53EF}\u{80FD}\u{6062}\u{590D}\u{6216}\u{6539}\u{5584}</p>
      <p>\u{2022} \u{5982}\u{836F}\u{7269}\u{5F15}\u{8D77}\u{7684}\u{FF0C}\u{505C}\u{836F}\u{540E}\u{53EF}\u{80FD}\u{6062}\u{590D}</p>
      
      <h3>\u{751F}\u{6D3B}\u{5EFA}\u{8BAE}</h3>
      <p>1. \u{63A5}\u{7EB3}\u{81EA}\u{5DF1}\u{FF0C}\u{8272}\u{76F2}\u{8272}\u{5F31}\u{4E0D}\u{5F71}\u{54CD}\u{6B63}\u{5E38}\u{751F}\u{6D3B}</p>
      <p>2. \u{544A}\u{77E5}\u{5BB6}\u{4EBA}\u{670B}\u{53CB}\u{FF0C}\u{83B7}\u{5F97}\u{7406}\u{89E3}\u{548C}\u{5E2E}\u{52A9}</p>
      <p>3. \u{9009}\u{62E9}\u{9002}\u{5408}\u{81EA}\u{5DF1}\u{7684}\u{4E13}\u{4E1A}\u{548C}\u{804C}\u{4E1A}</p>
      <p>4. \u{4F7F}\u{7528}\u{8F85}\u{52A9}\u{5DE5}\u{5177}\u{63D0}\u{9AD8}\u{751F}\u{6D3B}\u{8D28}\u{91CF}</p>
      <p>5. \u{5B9A}\u{671F}\u{68C0}\u{67E5}\u{89C6}\u{529B}\u{FF0C}\u{5173}\u{6CE8}\u{773C}\u{90E8}\u{5065}\u{5EB7}</p>
    `
    },
    {
        id: 'faq',
        title: "\u5E38\u89C1\u95EE\u9898",
        icon: "\u2753",
        content: `
      <h3>Q: \u{8272}\u{76F2}\u{5C31}\u{662F}\u{770B}\u{4E0D}\u{89C1}\u{989C}\u{8272}\u{5417}\u{FF1F}</h3>
      <p>A: \u{4E0D}\u{662F}\u{3002}\u{7EDD}\u{5927}\u{591A}\u{6570}\u{8272}\u{76F2}\u{8005}\u{80FD}\u{770B}\u{5230}\u{989C}\u{8272}\u{FF0C}\u{53EA}\u{662F}\u{96BE}\u{4EE5}\u{533A}\u{5206}\u{67D0}\u{4E9B}\u{989C}\u{8272}\u{FF08}\u{6700}\u{5E38}\u{89C1}\u{7684}\u{662F}\u{7EA2}\u{548C}\u{7EFF}\u{FF09}\u{3002}\u{53EA}\u{6709}\u{6781}\u{5C11}\u{6570}\u{5168}\u{8272}\u{76F2}\u{8005}\u{53EA}\u{80FD}\u{770B}\u{5230}\u{9ED1}\u{767D}\u{7070}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{76F2}\u{4F1A}\u{9057}\u{4F20}\u{5417}\u{FF1F}</h3>
      <p>A: \u{4F1A}\u{3002}\u{7EA2}\u{7EFF}\u{8272}\u{76F2}\u{662F} X \u{67D3}\u{8272}\u{4F53}\u{9690}\u{6027}\u{9057}\u{4F20}\u{FF0C}\u{5982}\u{679C}\u{7236}\u{4EB2}\u{662F}\u{8272}\u{76F2}\u{FF0C}\u{5973}\u{513F}\u{4F1A}\u{6210}\u{4E3A}\u{643A}\u{5E26}\u{8005}\u{FF1B}\u{6BCD}\u{4EB2}\u{662F}\u{643A}\u{5E26}\u{8005}\u{FF0C}\u{513F}\u{5B50}\u{6709} 50% \u{6982}\u{7387}\u{662F}\u{8272}\u{76F2}\u{3002}</p>
      
      <h3>Q: \u{6234}\u{8272}\u{76F2}\u{773C}\u{955C}\u{80FD}\u{901A}\u{8FC7}\u{9A7E}\u{7167}\u{8003}\u{8BD5}\u{5417}\u{FF1F}</h3>
      <p>A: \u{4E0D}\u{540C}\u{5730}\u{533A}\u{89C4}\u{5B9A}\u{4E0D}\u{540C}\u{3002}\u{4E00}\u{822C}\u{6765}\u{8BF4}\u{FF0C}\u{53EA}\u{8981}\u{80FD}\u{6B63}\u{786E}\u{5206}\u{8FA8}\u{7EA2}\u{7EFF}\u{706F}\u{5373}\u{53EF}\u{FF0C}\u{5EFA}\u{8BAE}\u{54A8}\u{8BE2}\u{5F53}\u{5730}\u{4EA4}\u{7BA1}\u{90E8}\u{95E8}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{5F31}\u{53EF}\u{4EE5}\u{5F53}\u{533B}\u{751F}\u{5417}\u{FF1F}</h3>
      <p>A: \u{89C6}\u{5177}\u{4F53}\u{4E13}\u{4E1A}\u{800C}\u{5B9A}\u{3002}\u{5916}\u{79D1}\u{3001}\u{75C5}\u{7406}\u{79D1}\u{7B49}\u{5BF9}\u{989C}\u{8272}\u{8981}\u{6C42}\u{9AD8}\u{7684}\u{4E13}\u{4E1A}\u{53EF}\u{80FD}\u{53D7}\u{9650}\u{FF0C}\u{5EFA}\u{8BAE}\u{54A8}\u{8BE2}\u{76EE}\u{6807}\u{9662}\u{6821}\u{6216}\u{5355}\u{4F4D}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{76F2}\u{4F1A}\u{8D8A}\u{6765}\u{8D8A}\u{4E25}\u{91CD}\u{5417}\u{FF1F}</h3>
      <p>A: \u{5148}\u{5929}\u{6027}\u{8272}\u{76F2}\u{4E00}\u{822C}\u{4E0D}\u{4F1A}\u{52A0}\u{91CD}\u{3002}\u{5982}\u{679C}\u{540E}\u{5929}\u{51FA}\u{73B0}\u{8272}\u{89C9}\u{53D8}\u{5316}\u{FF0C}\u{5E94}\u{53CA}\u{65F6}\u{5C31}\u{533B}\u{68C0}\u{67E5}\u{FF0C}\u{53EF}\u{80FD}\u{662F}\u{773C}\u{90E8}\u{6216}\u{5168}\u{8EAB}\u{75BE}\u{75C5}\u{7684}\u{4FE1}\u{53F7}\u{3002}</p>
      
      <h3>Q: \u{8272}\u{76F2}\u{8005}\u{80FD}\u{751F}\u{5B69}\u{5B50}\u{5417}\u{FF1F}</h3>
      <p>A: \u{53EF}\u{4EE5}\u{3002}\u{8272}\u{76F2}\u{8005}\u{751F}\u{80B2}\u{80FD}\u{529B}\u{6B63}\u{5E38}\u{FF0C}\u{53EA}\u{662F}\u{5B69}\u{5B50}\u{6709}\u{53EF}\u{80FD}\u{9057}\u{4F20}\u{8272}\u{76F2}\u{FF08}\u{6982}\u{7387}\u{53D6}\u{51B3}\u{4E8E}\u{914D}\u{5076}\u{662F}\u{5426}\u{643A}\u{5E26}\u{81F4}\u{75C5}\u{57FA}\u{56E0}\u{FF09}\u{3002}</p>
      
      <h3>Q: \u{5B55}\u{5987}\u{5403}\u{4EC0}\u{4E48}\u{80FD}\u{9884}\u{9632}\u{5B69}\u{5B50}\u{8272}\u{76F2}\u{FF1F}</h3>
      <p>A: \u{5148}\u{5929}\u{6027}\u{8272}\u{76F2}\u{662F}\u{57FA}\u{56E0}\u{51B3}\u{5B9A}\u{7684}\u{FF0C}\u{996E}\u{98DF}\u{65E0}\u{6CD5}\u{9884}\u{9632}\u{3002}\u{4F46}\u{5B55}\u{671F}\u{8865}\u{5145}\u{7EF4}\u{751F}\u{7D20} A \u{7B49}\u{5BF9}\u{80CE}\u{513F}\u{89C6}\u{529B}\u{53D1}\u{80B2}\u{6709}\u{597D}\u{5904}\u{3002}</p>
      
      <h3>Q: \u{4E3A}\u{4EC0}\u{4E48}\u{6211}\u{4EE5}\u{524D}\u{80FD}\u{5206}\u{6E05}\u{7684}\u{989C}\u{8272}\u{73B0}\u{5728}\u{5206}\u{4E0D}\u{6E05}\u{4E86}\u{FF1F}</h3>
      <p>A: \u{540E}\u{5929}\u{8272}\u{89C9}\u{6539}\u{53D8}\u{9700}\u{8981}\u{91CD}\u{89C6}\u{FF0C}\u{53EF}\u{80FD}\u{662F}\u{767D}\u{5185}\u{969C}\u{3001}\u{9752}\u{5149}\u{773C}\u{3001}\u{89C6}\u{7F51}\u{819C}\u{75C5}\u{53D8}\u{7B49}\u{773C}\u{90E8}\u{75BE}\u{75C5}\u{FF0C}\u{6216}\u{7CD6}\u{5C3F}\u{75C5}\u{7B49}\u{5168}\u{8EAB}\u{6027}\u{75BE}\u{75C5}\u{7684}\u{8868}\u{73B0}\u{FF0C}\u{5EFA}\u{8BAE}\u{5C3D}\u{5FEB}\u{5C31}\u{533B}\u{68C0}\u{67E5}\u{3002}</p>
    `
    }
];
let currentKnowledgeTab = 'overview';
function showKnowledge() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('knowledgeScreen').classList.add('active');
    renderKnowledgeTabs();
    renderKnowledgeContent();
}
function hideKnowledge() {
    document.getElementById('knowledgeScreen').classList.remove('active');
    document.getElementById('startScreen').style.display = 'block';
}
function renderKnowledgeTabs() {
    const tabsContainer = document.getElementById('knowledgeTabs');
    tabsContainer.innerHTML = knowledgeData.map((item)=>`
    <button class="knowledgeTab ${item.id === currentKnowledgeTab ? 'active' : ''}" data-tab="${item.id}">
      <span class="knowledgeTabIcon">${item.icon}</span>
      <span class="knowledgeTabTitle">${item.title}</span>
    </button>
  `).join('');
    document.querySelectorAll('.knowledgeTab').forEach((tab)=>{
        tab.addEventListener('click', ()=>{
            currentKnowledgeTab = tab.dataset.tab;
            renderKnowledgeTabs();
            renderKnowledgeContent();
        });
    });
}
function renderKnowledgeContent() {
    const content = knowledgeData.find((item)=>item.id === currentKnowledgeTab);
    const contentContainer = document.getElementById('knowledgeContent');
    contentContainer.innerHTML = `
    <div class="knowledgeSection">
      <div class="knowledgeSectionHeader">
        <span class="knowledgeSectionIcon">${content.icon}</span>
        <h3 class="knowledgeSectionTitle">${content.title}</h3>
      </div>
      <div class="knowledgeSectionContent">${content.content}</div>
    </div>
  `;
}
document.addEventListener('DOMContentLoaded', initApp);

},{}]},["7wZbQ","2R06K"], "2R06K", "parcelRequire7be9", {})

//# sourceMappingURL=color-blind-test-web.0f77c784.js.map
