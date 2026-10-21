__d("WAWebVoipBackgroundWarmConditions", [
    "Promise",
    "WAWebBackendEventBus",
    "WAWebBackendEventBusTypes",
    "WAWebNetworkType",
    "WAWebPonyfillsIdleCallback"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 30000;
    const u = new Set([
        "2g",
        "slow-2g"
    ]);
    function c() {
        if (o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd) {
            return (e || (e = n("Promise"))).resolve();
        }
        return new (e || (e = n("Promise")))(function(e) {
            o("WAWebBackendEventBus").BackendEventBus.onceOfflineDeliveryEnd(function() {
                return e();
            });
        });
    }
    function d() {
        let e = false;
        const t = function() {
            e = true;
        };
        o("WAWebBackendEventBus").BackendEventBus.onOfflineDeliveryStateReset(t);
        return {
            didRestart: function() {
                return e || !o("WAWebBackendEventBus").BackendEventBus.isOfflineDeliveryEnd;
            },
            stop: function() {
                o("WAWebBackendEventBus").BackendEventBus.off(o("WAWebBackendEventBusTypes").BackendEvent.OFFLINE_DELIVERY_STATE_RESET, t);
            }
        };
    }
    function m(e) {
        return Date.now() - e <= s;
    }
    function p(t) {
        return new (e || (e = n("Promise")))(function(e) {
            let n = null;
            const r = t == null ? null : self.setTimeout(function() {
                if (n != null) {
                    o("WAWebPonyfillsIdleCallback").cancelIdleCallback(n);
                }
                e();
            }, t);
            n = o("WAWebPonyfillsIdleCallback").requestIdleCallback(function() {
                if (r != null) {
                    self.clearTimeout(r);
                }
                e();
            });
        });
    }
    function _() {
        const t = navigator;
        return t.connection?.saveData === true || u.has(o("WAWebNetworkType").getEffectiveNetworkType());
    }
    l.waitForCurrentOfflineDeliveryEnd = c;
    l.watchForOfflineDeliveryRestart = d;
    l.didFireOnTime = m;
    l.waitForIdleCallback = p;
    l.isConstrainedNetwork = _;
}, 98);