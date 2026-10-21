__d("gkx", [
    "invariant",
    "BanzaiLazyQueue",
    "ExecutionEnvironment",
    "emptyFunction"
], function(t, n, r, o, a, i, l, s) {
    "use strict";
    let e;
    const u = {};
    const c = {};
    function d(t) {
        const n = u[t];
        if (n == null) {
            s(0, 11797, t);
        }
        if (!c[t]) {
            c[t] = true;
            if (n.hash != null && ((e || (e = r("ExecutionEnvironment"))).canUseDOM || (e || (e = r("ExecutionEnvironment"))).isInWorker)) {
                o("BanzaiLazyQueue").queuePost("gk2_exposure", {
                    identifier: t,
                    hash: n.hash
                });
            }
        }
        return n.result;
    }
    d.add = function(e, t) {
        for(const n in e){
            if (t) {
                t.entry++;
            }
            if (n in u) {
                if (t) {
                    t.dup_entry++;
                }
            } else {
                u[n] = e[n];
            }
        }
    };
    d.addLoggedInternal = function(e) {
        d.add(e);
        for(const t in e){
            c[t] = true;
        }
    };
    const m = r("emptyFunction");
    d.getGKs = function() {
        return null;
    };
    d.getLogged = function() {
        return Object.keys(c).map((e)=>({
                identifier: e,
                hash: u[e].hash
            }));
    };
    d.setPass = m;
    d.setFail = m;
    d.clear = m;
    l.default = d;
}, 98);