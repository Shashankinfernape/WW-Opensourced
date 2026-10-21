__d("ReactDOMServerExternalRuntime", [
    "ExecutionEnvironment",
    "unstable_server-external-runtime-exp"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    if ((e || (e = r("ExecutionEnvironment"))).canUseDOM) {
        n("unstable_server-external-runtime-exp");
        if (window._qplInl && typeof window._qplInl === "object" && window._qplInl.addPoint && typeof window._qplInl.addPoint === "function") {
            window._qplInl.addPoint("ssrPayloadListenerStart");
        }
    }
}, 35);