__d("ServerJsRuntimeEnvironment", [
    "invariant"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    function u(platform, executionContext) {
        if (e != null) {
            s(0, 71696);
        }
        e = {
            platform,
            executionContext
        };
    }
    function c() {
        return e != null;
    }
    function d() {
        return e?.executionContext;
    }
    function m() {
        return e?.platform;
    }
    l.init = u;
    l.isRunningServerJsRuntime = c;
    l.getExecutionContext = d;
    l.getPlatform = m;
}, 98);