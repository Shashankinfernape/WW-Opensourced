__d("RSTLogForCrash", [
    "$InternalEnum",
    "Deferred",
    "FBLogger",
    "getErrorSafe",
    "justknobx",
    "logForCrash",
    "logForCrashUtils",
    "nextCrashLoggingSpanId",
    "requireWeak"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    let u;
    const c = new (r("Deferred"));
    d();
    function d() {
        const t = ()=>{
            if (e && s && u) {
                c.resolve();
            }
        };
        try {
            r("requireWeak")("ResponsiveTrackerMainThread", function(n) {
                e = n;
                t();
            });
            r("requireWeak")("RSTExternalLoggingDataStoreMainThread", function(e) {
                s = e?.loggingDataStore;
                t();
            });
            r("requireWeak")("RSTEvents", function(e) {
                u = e?.RSTEvent;
                t();
            });
        } catch (error) {
            r("FBLogger")("responsive-tracker").catching(r("getErrorSafe")(error)).warn("Failed to load RST dependencies in RSTLogForCrash");
        }
    }
    const m = r("justknobx")._("3831");
    const p = n("$InternalEnum")({
        VALID_UNTIL_NEXT_HEARTBEAT: 0,
        VALID_UNTIL_NEXT_WRITE: 1,
        VALID_FOR_5_SECONDS: 2,
        VALID_FOR_2_MINUTES: 3
    });
    function _(t) {
        if (e == null) {
            return null;
        }
        switch(t){
            case p.VALID_UNTIL_NEXT_HEARTBEAT:
                return null;
            case p.VALID_UNTIL_NEXT_WRITE:
                return null;
            case p.VALID_FOR_5_SECONDS:
                return Date.now() + 5 * 1000;
            case p.VALID_FOR_2_MINUTES:
                return Date.now() + 120 * 1000;
        }
        return null;
    }
    let f = 0;
    const g = 500;
    function h(t, n, a = p.VALID_UNTIL_NEXT_HEARTBEAT, i = {}) {
        if (a !== p.VALID_UNTIL_NEXT_HEARTBEAT && i.logForNativeReports !== false) {
            const c = {
                isSystem: i.isSystem,
                isJSStackTrace: i.isJSStackTrace
            };
            o("logForCrash").logForCrash(t, n, c);
            if (a === p.VALID_FOR_5_SECONDS) {
                window.setTimeout(function() {
                    return o("logForCrash").clearCrashLog(t, c);
                }, 5000);
            } else if (a === p.VALID_FOR_2_MINUTES) {
                window.setTimeout(function() {
                    return o("logForCrash").clearCrashLog(t, c);
                }, 120 * 1000);
            }
        }
        if (!(!m || e == null)) {
            const d = typeof n === "object" ? C(n) : n.toString();
            if (d != null) {
                const _ = i.isJSStackTrace === true ? `${r("logForCrashUtils").RST_JS_STACK_KEY_PREFIX}:${t}` : t;
                s?.log(_, d, a);
                const h = Date.now();
                if (!(i.immediateFlush !== true || h - f < g) && (f = h, u != null)) {
                    e?.postEventLightweight(u.LOG_FLUSH);
                }
            }
        }
    }
    function y(e) {
        return s?.isValidValue(e) ?? false;
    }
    function C(e) {
        try {
            return JSON.stringify(e);
        } catch (e) {
            r("FBLogger")("responsive-tracker").mustfix("Failed to stringify object for RST logging");
            return null;
        }
    }
    const b = new Map;
    const v = new Map;
    const S = new Map;
    function R(t, n, r = {}) {
        const i = m && e != null;
        const l = r.logForNativeReports ?? true;
        if (!i && !l) {
            return -1;
        }
        try {
            let u;
            if (v.has(t)) {
                const p = v.get(t);
                if (p != null) {
                    if (i) {
                        s?.logSpanEnd(p);
                    }
                    b.delete(p);
                    S.delete(p);
                }
                v.delete(t);
            }
            let f = i && (u = s?.logSpanStart(t, n)) != null ? u : -1;
            const g = r.isSystem ?? false;
            if (l) {
                if (f === -1) {
                    f = o("nextCrashLoggingSpanId").nextCrashLoggingSpanId();
                }
                const h = `span:${t}`;
                o("logForCrash").logForCrash(h, n, {
                    isSystem: g
                });
            }
            if (f !== -1) {
                b.set(f, t);
                S.set(f, r);
                v.set(t, f);
            }
            return f;
        } catch (e) {
            return -1;
        }
    }
    function L(t) {
        const n = e != null && t !== -1;
        const r = t !== -1;
        if (!(!n && !r)) {
            const a = b.get(t);
            try {
                if (n) {
                    s?.logSpanEnd(t);
                }
                if (a == null) {
                    return;
                }
                const u = S.get(t) ?? {};
                if (r) {
                    const d = u.isSystem ?? false;
                    const m = `span:${a}`;
                    o("logForCrash").clearCrashLog(m, {
                        isSystem: d
                    });
                }
            } finally{
                if (a != null) {
                    v.delete(a);
                }
                b.delete(t);
                S.delete(t);
            }
        }
    }
    function E(t) {
        const n = v.has(t);
        const r = e != null && n;
        const a = n;
        if (!(!r && !a)) {
            const i = v.get(t);
            let l = {};
            try {
                if (i != null) {
                    l = S.get(i) ?? {};
                    if (r) {
                        s?.logSpanEnd(i);
                    }
                }
                if (a) {
                    const m = l.isSystem ?? false;
                    const p = `span:${t}`;
                    o("logForCrash").clearCrashLog(p, {
                        isSystem: m
                    });
                }
            } finally{
                if (i != null) {
                    b.delete(i);
                    S.delete(i);
                }
                v.delete(t);
            }
        }
    }
    const k = 1000;
    const I = 100;
    const T = new Map;
    function D(e, t) {
        if (!T.has(e)) {
            if (T.size >= k) {
                return;
            }
            T.set(e, new Set);
        }
        const n = T.get(e);
        if (!(n == null || n.size > I)) {
            n?.add(t);
            const r = Array.from(n).sort();
            const o = `collection:${e}`;
            h(o, JSON.stringify(r), p.VALID_UNTIL_NEXT_WRITE, {
                isSystem: true
            });
        }
    }
    l.logForCrashReadyPromise = c;
    l.RSTLogMode = p;
    l.getExpirationTime = _;
    l.logForCrash = h;
    l.isValidStringValue = y;
    l.logSpanStart = R;
    l.logSpanEnd = L;
    l.logSpanEndForKey = E;
    l.logElementInCollectionForCrash = D;
}, 98);