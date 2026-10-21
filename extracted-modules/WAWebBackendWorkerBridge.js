__d("WAWebBackendWorkerBridge", [
    "WACrossWorkerPortal",
    "WADynamicRouterSync"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        const t = new (o("WADynamicRouterSync")).DynamicRouterSync;
        for (const n of e){
            const { handlers: r, namespace: a } = n;
            t.setHandlers(a, r);
        }
        return t;
    }
    function s(e, t, n) {
        const r = o("WACrossWorkerPortal").attachPortal(e, n, function(e, t) {
            e.push(t);
            return e;
        }, "d1923", {
            bridgeBatcherMaxTokens: Number.MAX_SAFE_INTEGER
        });
        r.setPort(t);
        return r;
    }
    l.createBridge = e;
    l.attachBridgeToPortal = s;
}, 98);