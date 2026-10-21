__d("ErrorUtils", [
    "ErrorGuard",
    "ErrorGuardState",
    "ErrorNormalizeUtils",
    "ErrorPubSub",
    "ErrorSerializer",
    "getErrorSafe"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    let d;
    if (!u) {
        u = n("ErrorGuardState");
    }
    n("ErrorNormalizeUtils");
    if (!c) {
        c = n("ErrorPubSub");
    }
    n("getErrorSafe");
    if (!d) {
        d = n("ErrorGuard");
    }
    n("ErrorSerializer");
    t.getErrorSafe = r("getErrorSafe");
    t.ErrorGuard = e || (e = r("ErrorGuard"));
    t.ErrorSerializer = r("ErrorSerializer");
    const m = {
        history: (s || (s = r("ErrorPubSub"))).history,
        applyWithGuard: function(n, o, a, onNormalizedError, name, s) {
            return (e || (e = r("ErrorGuard"))).applyWithGuard(n, o, a ?? [], {
                name,
                onNormalizedError,
                deferredSource: s?.deferredSource
            });
        },
        guard: function(n, o, a) {
            let t = (e || (e = r("ErrorGuard"))).guard(n, o != null ? {
                name: o
            } : null);
            if (a != null) {
                t = t.bind(a);
            }
            return t;
        },
        normalizeError: function(t) {
            return r("ErrorNormalizeUtils").ifNormalizedError(t) ?? r("ErrorNormalizeUtils").normalizeError(r("getErrorSafe")(t));
        }
    };
    t.ErrorUtils = m;
    const p = m;
    if (typeof __t === "function" && __t.setHandler) {
        __t.setHandler((s || (s = r("ErrorPubSub"))).reportError);
    }
    l.default = p;
}, 99);