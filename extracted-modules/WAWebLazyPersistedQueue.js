__d("WAWebLazyPersistedQueue", [
    "JSResourceForInteraction",
    "Promise",
    "QPLFlow",
    "WALogger",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForOfflineDeliveryEnd",
    "WAWebJobsMigrationGating",
    "WAWebLazyLoadedRetriable",
    "WAWebPersistedQueueQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    const u = r("WAWebLazyLoadedRetriable")(function() {
        return r("JSResourceForInteraction")("WAWebPersistedQueues").__setRef("WAWebLazyPersistedQueue").load();
    }, "WAWebPersistedQueues");
    let c = null;
    function d(e) {
        return o("QPLFlow").QplSubspan.wrapInSubspan(e, "wait_ready", function() {
            const t = c ?? p(e);
            c = t;
            return t;
        });
    }
    function m() {
        if (c != null || o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
            return (s || (s = n("Promise"))).resolve();
        }
        return o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd({
            ignoreInit: true
        });
    }
    function p(e) {
        return _.apply(this, arguments);
    }
    function _() {
        _ = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
            if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                yield o("QPLFlow").QplSubspan.wrapInSubspan(e, "wait_offline_delivery_end", function() {
                    return o("WAWebEventsWaitForOfflineDeliveryEnd").waitForOfflineDeliveryEnd({
                        ignoreInit: true
                    });
                });
            }
            const t = yield o("QPLFlow").QplSubspan.wrapInSubspan(e, "bundle_fetch", u);
            yield o("QPLFlow").QplSubspan.wrapInSubspan(e, "db_open", function() {
                return t.ensurePersistedQueuesOpen();
            });
            return t;
        });
        return _.apply(this, arguments);
    }
    function f() {
        if (o("WAWebJobsMigrationGating").isPersistedQueuesEnabled()) {
            if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                g("immediate");
                return;
            }
            o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(function() {
                return g("offline_delivery_end");
            });
        }
    }
    function g(preloadTrigger) {
        const n = o("QPLFlow").startQPLFlow(o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_EVENT, {
            annotations: {
                bool: {
                    isPQ: true
                },
                string: {
                    operationType: "preload",
                    preloadTrigger
                }
            },
            timeoutInMs: o("WAWebPersistedQueueQpl").PERSISTED_QUEUE_TIMEOUT_MS
        });
        o("QPLFlow").endWith(n, function() {
            return d(n);
        }).catch((t)=>{
            o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                "[persisted-queues] preload failed"
            ]))).catching(r("getErrorSafe")(t)).tags("messaging").sendLogs("persisted-queues-preload-failed");
        });
    }
    function h(e) {
        return {
            ack: function(n, r) {
                return d(n).then(()=>e.ack(r));
            },
            add: function(n, r) {
                return d(n).then(()=>e.add(r));
            },
            read: function(n, r) {
                return d(n).then(()=>e.read(r));
            },
            subscribe: function(n) {
                return e.subscribe(n);
            }
        };
    }
    l.whenPersistedQueuesReady = d;
    l.whenPersistedQueuesMayOpen = m;
    l.schedulePersistedQueuesPreload = f;
    l.lazyPersistedQueue = h;
}, 98);