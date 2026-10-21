__d("WAWebHeroInteractionRouterRoot", [
    "CometAddInlineTiming",
    "Env",
    "WAWebEnvironment",
    "WAWebNoopGC",
    "createHeroInteractionRouterRoot",
    "qpl"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = (e || (e = r("Env"))).brsid != null ? String((e || (e = r("Env"))).brsid) : null;
    const u = r("createHeroInteractionRouterRoot")();
    let c = null;
    const d = {
        Component: u.Component,
        startInitialLoad: function(t) {
            if (c == null) {
                o("WAWebNoopGC").installGCNoopWrapper();
                const tracePolicy = `wa.web.${t}`;
                c = u.startInitialLoad({
                    tracePolicy,
                    qplEvent: r("qpl")._(858078457, "1005"),
                    metadata: {
                        subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                        environment: r("WAWebEnvironment").getEnvironment()
                    }
                });
                c?.onComplete(function(e) {
                    if (s != null) {
                        o("CometAddInlineTiming").addInlineTiming(e.traceId, s, 0);
                    }
                });
            }
        },
        startNavigation: function(t) {}
    };
    l.default = d;
}, 98);