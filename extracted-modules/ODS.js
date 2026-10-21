__d("ODS", [
    "ExecutionEnvironment",
    "FBLogger",
    "OdsWebBatchFalcoEvent",
    "Random",
    "Run",
    "clearTimeout",
    "gkx",
    "setTimeout"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = (e || (e = r("ExecutionEnvironment"))).canUseDOM || (e || (e = r("ExecutionEnvironment"))).isInWorker;
    const c = {};
    function d(e, t, n, r = 1, o = 1) {
        const i = c[t] ?? null;
        if (!(i != null && i <= 0)) {
            s = s || {};
            const l = s[e] || (s[e] = {});
            const u = l[t] || (l[t] = {});
            const d = u[n] || (u[n] = {
                n: 0,
                d: null
            });
            let m = Number(r);
            let _ = Number(o);
            if (i > 0) {
                m /= i;
                _ /= i;
            }
            if (!(!isFinite(m) || !isFinite(_))) {
                d.n += m;
                if (arguments.length >= 5) {
                    let f = d.d;
                    if (f == null) {
                        f = 0;
                    }
                    d.d = f + _;
                }
                p();
            }
        }
    }
    let m;
    function p() {
        if (m == null) {
            m = r("setTimeout")(function() {
                h();
            }, r("gkx")("20935") ? 13000 / 2 : 5000);
        }
    }
    function _(e, t) {
        if (u) {
            c[e] = o("Random").random() < t ? t : 0;
        }
    }
    function f(e, t, n, r = 1) {
        if (u) {
            d(e, t, n, r);
        }
    }
    function g(e, t, n, r = 1, o = 1) {
        if (u) {
            d(e, t, n, r, o);
        }
    }
    function h(e = "normal") {
        if (!u || (r("clearTimeout")(m), m = null, s == null)) {
            return;
        }
        const batch = s;
        s = null;
        function n() {
            return {
                batch
            };
        }
        if (e === "critical") {
            r("OdsWebBatchFalcoEvent").logCritical(n);
        } else {
            r("OdsWebBatchFalcoEvent").log(n);
        }
    }
    if (u) {
        o("Run").onUnload(function() {
            h("critical");
        });
    }
    l.setEntitySample = _;
    l.bumpEntityKey = f;
    l.bumpFraction = g;
    l.flush = h;
}, 98);