__d("WAWebServiceWorkerSupport", [
    "Promise",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebEventEmitter",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUA"
], function(t, n, r, o, a, i, l) {
    let e;
    const s = ((e)=>{
        function t(t, n) {
            let r;
            if (t === void 0) {
                t = u();
            }
            if (n === void 0) {
                n = "serviceWorker" in navigator;
            }
            r = e.call(this) || this;
            r._streamingSupported = false;
            r._publishedSupported = false;
            r._probeGeneration = 0;
            r._watchingControllerChanges = false;
            r.getStreamingSupported = function() {
                return r._streamingSupported && r._environment.hasController();
            };
            r.refreshStreamingSupport = function() {
                if (!r.supported || o("WAWebUA").UA.isSafari) {
                    r._setStreamingSupported(false);
                    return;
                }
                r._watchControllerChanges();
                if (!r._environment.hasController()) {
                    r._setStreamingSupported(false);
                    return;
                }
                if (!r._streamingSupportedPromise) {
                    const e = r._probeGeneration;
                    r._streamingSupportedPromise = o("WAPromiseTimeout").promiseTimeout(r._environment.requestStreamingSupported(), 100).catch(o("WAWebBoolFunc").returnFalse).then((t)=>{
                        if (e !== r._probeGeneration) {
                            return false;
                        }
                        delete r._streamingSupportedPromise;
                        const n = !!t && r._environment.hasController();
                        r._setStreamingSupported(n);
                        return n;
                    });
                }
            };
            r._watchControllerChanges = function() {
                if (!r._watchingControllerChanges) {
                    r._watchingControllerChanges = true;
                    r._environment.onControllerChange(function() {
                        r._probeGeneration++;
                        delete r._streamingSupportedPromise;
                        r._announce();
                        r.refreshStreamingSupport();
                    });
                }
            };
            r.subscribe = function(e) {
                r.on("change:streamingSupported", e);
                return function() {
                    r.off("change:streamingSupported", e);
                };
            };
            r._setStreamingSupported = function(e) {
                r._streamingSupported = e;
                r._publish();
            };
            r._publish = function() {
                if (r.getStreamingSupported() !== r._publishedSupported) {
                    r._announce();
                }
            };
            r._announce = function() {
                const e = r.getStreamingSupported();
                r._publishedSupported = e;
                r.trigger("change:streamingSupported", e);
            };
            r._checkAlive = function() {
                return r._environment.hasController();
            };
            r._environment = t;
            r.supported = n;
            const a = r;
            Object.defineProperty(r, "alive", {
                get: function() {
                    return a._checkAlive();
                }
            });
            return r;
        }
        babelHelpers.inheritsLoose(t, e);
        return t;
    })(r("WAWebEventEmitter"));
    function u() {
        return {
            hasController: function() {
                return navigator.serviceWorker?.controller != null;
            },
            requestStreamingSupported: function() {
                const o = navigator.serviceWorker?.controller;
                if (o == null) {
                    return (e || (e = n("Promise"))).resolve(false);
                }
                return r("WAWebSWBus").request(o, r("WAWebSWBusActions").STREAMING_SUPPORTED);
            },
            onControllerChange: function(t) {
                navigator.serviceWorker?.addEventListener("controllerchange", t);
            }
        };
    }
    l.ServiceWorkerSupport = s;
}, 98);