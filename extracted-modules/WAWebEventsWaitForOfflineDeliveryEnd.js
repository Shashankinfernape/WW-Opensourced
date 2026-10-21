__d("WAWebEventsWaitForOfflineDeliveryEnd", [
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAResolvable",
    "WAWebBackendEventBus",
    "WAWebEventsWaitForBbEvent",
    "WAWebMessageDeliveryCounters",
    "WAWebMessageQueueImpl",
    "asyncToGeneratorRuntime",
    "err"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = 300000;
    function c() {
        if (s == null) {
            s = r("WAWebEventsWaitForBbEvent")(o("WAWebBackendEventBus").BackendEventBus, "offline_delivery_end");
            o("WAWebBackendEventBus").BackendEventBus.on("offline_delivery_state_reset", function() {
                s = r("WAWebEventsWaitForBbEvent")(o("WAWebBackendEventBus").BackendEventBus, "offline_delivery_end");
            });
        }
    }
    function d() {
        return o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
    }
    function m(e) {
        return p.apply(this, arguments);
    }
    function p() {
        p = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t) {
            if (!o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
                const n = t ?? {};
                const a = n.ignoreInit;
                const i = a === void 0 ? false : a;
                const l = new (o("WAResolvable")).Resolvable;
                if (i) {
                    o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(function() {
                        l.resolve();
                    });
                } else {
                    if (s == null) {
                        throw r("err")("waitForOfflineDeliveryEnd called before init");
                    }
                    s.then(()=>{
                        l.resolve();
                    });
                }
                try {
                    yield o("WAPromiseTimeout").promiseTimeout(l.promise, u);
                } catch (t) {
                    if (t instanceof o("WACustomError").TimeoutError) {
                        o("WALogger").ERROR(e || (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[offline-resume] delivery promise timeout 5min"
                        ]))).sendLogs("offline-resume-promise-unresolved", {
                            sampling: 0.01
                        });
                        o("WAWebMessageDeliveryCounters").logOfflineDeliveryWaitTimeout(o("WAWebMessageQueueImpl").getMessageQueueImpl());
                        return;
                    }
                    throw t;
                }
            }
        });
        return p.apply(this, arguments);
    }
    l.initWaitForOfflineDeliveryEnd = c;
    l.isOfflineDeliveryEnd = d;
    l.waitForOfflineDeliveryEnd = m;
}, 98);