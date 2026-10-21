__d("VultureJSServerHits", [
    "ServerJsRuntimeEnvironment"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = 1000;
    const s = new Set;
    let u = new Set;
    function c(t) {
        if (o("ServerJsRuntimeEnvironment").isRunningServerJsRuntime()) {
            if (!s.has(t) && s.size < e) {
                s.add(t);
                u.add(t);
            }
            return true;
        }
        return false;
    }
    function d() {
        if (u.size === 0) {
            return null;
        }
        const e = Array.from(u);
        u = new Set;
        return e;
    }
    function m() {
        const vulture_hits = d();
        if (vulture_hits == null) {
            return null;
        }
        return {
            vulture_hits
        };
    }
    l.collectServerHit = c;
    l.drainServerHits = d;
    l.drainServerHitsSideChannel = m;
}, 98);