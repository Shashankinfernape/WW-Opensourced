__d("FalcoLoggerInternal", [
    "AnalyticsCoreData",
    "FBLogger",
    "FalcoCollectionConstraintChecker",
    "FalcoLoggerInternalState",
    "FalcoUtils",
    "Promise",
    "Random",
    "ServerTime",
    "WebSession",
    "err",
    "justknobx",
    "performanceAbsoluteNow",
    "promiseDone"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    const c = o("FalcoUtils").getTaggedBitmap(0);
    const d = o("FalcoUtils").getTaggedBitmap(37);
    const m = 500 * 1024 * 0.6;
    const p = {};
    function _() {
        try {
            if (r("justknobx")._("1276") && window.self !== window.top && window.top?.require != null) {
                const t = window.top.require("FalcoLoggerInternalState");
                if (t != null) {
                    r("FBLogger")("falco", "iframe_handling").warn("Successfully delegated internal state to top frame");
                    return t.getInstance();
                }
            }
        } catch (e) {}
        return r("FalcoLoggerInternalState").getInstance();
    }
    const f = _();
    function g(e, t, n) {
        const a = r("Random").coinflip(t.r);
        if (!a) {
            o("FalcoUtils").bumpODSMetrics(n, "event.filters.sampling", 1);
            return false;
        }
        const i = t.c;
        if (i != null && (s || (s = r("AnalyticsCoreData"))).consents != null) {
            const l = {
                consents: (s || (s = r("AnalyticsCoreData"))).consents
            };
            const u = h(i, l, e);
            if (!u) {
                o("FalcoUtils").bumpODSMetrics(n, "event.filters.consent", 1);
                return false;
            }
        }
        return true;
    }
    function h(e, t, n) {
        let o = p[e];
        if (o == null) {
            o = p[e] = JSON.parse(e);
        }
        return r("FalcoCollectionConstraintChecker")(t, n, o);
    }
    function y() {
        return (u || (u = r("performanceAbsoluteNow")))() - o("ServerTime").getOffsetMillis();
    }
    function C(e, t, sampled, o, getData, getPrivacyContext) {
        if ((s || (s = r("AnalyticsCoreData"))).enable_observer) {
            const l = babelHelpers.extends({
                name: e,
                time: t,
                sampled,
                getData,
                policy: o
            }, getPrivacyContext && {
                getPrivacyContext
            });
            f_observable.emit("event", l);
        }
    }
    function b(e, t, n, privacyContext, i, l) {
        const extra = JSON.stringify(i);
        if (extra.length > m) {
            o("FalcoUtils").bumpODSMetrics(e, "event.filters.exceeded_size", 1);
            r("FBLogger")("falco", `oversized_message:${e}`).warn('Dropping event "%s" due to exceeding the max size %s at %s', e, m, extra.length);
            return;
        }
        let tags = o("FalcoUtils").xorBitmap([
            0,
            0
        ], c);
        tags = o("FalcoUtils").xorBitmap(tags, d);
        const _ = {
            name: e,
            policy: t,
            time: n,
            extra,
            privacyContext,
            tags,
            sessionId: o("WebSession").getId(),
            deviceId: (s || (s = r("AnalyticsCoreData"))).device_id,
            appVersion: s.app_version
        };
        l.wrapAndEnqueueItem(_);
        o("FalcoUtils").bumpODSMetrics(e, "event.captured", 1);
    }
    function v(e, t, n, a, i, l) {
        try {
            const s = y();
            o("FalcoUtils").bumpODSMetrics(e, "event.logged", 1);
            const u = g(s, t, e);
            if (u) {
                const c = a();
                const d = n && n();
                if (i) {
                    r("promiseDone")(i().then((n)=>{
                        b(e, t, s, d, babelHelpers.extends({}, c, n), l);
                    }).catch((n)=>{
                        r("FBLogger")("falco", "canonical_resolution_failed").catching(n instanceof Error ? n : r("err")(String(n))).warn('Failed to resolve canonicals for "%s", logging without them', e);
                        b(e, t, s, d, c, l);
                    }));
                } else {
                    b(e, t, s, d, c, l);
                }
            }
            C(e, s, u, t, a, n);
        } catch (error) {
            R(error);
        }
    }
    function S(t, a, i, l, s, logQueue) {
        try {
            const c = y();
            o("FalcoUtils").bumpODSMetrics(t, "event.logged", 1);
            const d = g(c, a, t);
            if (d) {
                const m = l();
                const p = (e || (e = n("Promise"))).resolve(i && i());
                const _ = s ? s().catch((e)=>{
                    r("FBLogger")("falco", "canonical_resolution_failed").catching(e instanceof Error ? e : r("err")(String(e))).warn('Failed to resolve canonicals for "%s", logging without them', t);
                    return null;
                }) : null;
                return e.all([
                    m,
                    p,
                    _
                ]).then(([n, r, o])=>{
                    b(t, a, c, r, o ? babelHelpers.extends({}, n, o) : n, logQueue);
                    C(t, c, d, a, function() {
                        return n;
                    }, r && function() {
                        return r;
                    });
                });
            } else {
                C(t, c, d, a, l, i);
                return (e || (e = n("Promise"))).resolve();
            }
        } catch (error) {
            return (e || (e = n("Promise"))).reject(error);
        }
    }
    function R(e) {
        const t = r("FBLogger")("falco");
        if (e instanceof Error) {
            t.catching(e).warn("Error while attempting to log to Falco");
        } else {
            t.warn("Caught non-error while attempting to log to Falco: %s", JSON.stringify(e));
        }
    }
    var f_observable = f.observable;
    function E(e, t, n) {
        const { logCriticalQueue, logImmediatelyQueue, logQueue } = f;
        return {
            log: function(o, i) {
                v(e, t, i, o, n, logQueue);
            },
            logAsync: function(o, i) {
                S(e, t, i, o, n, logQueue).catch(R);
            },
            logImmediately: function(a, i) {
                v(e, t, i, a, n, logImmediatelyQueue);
            },
            logCritical: function(a, i) {
                v(e, t, i, a, n, logCriticalQueue);
            },
            logRealtimeEvent: function(a, i) {
                v(e, t, i, a, n, logCriticalQueue);
            }
        };
    }
    l.observable = f_observable;
    l.create = E;
}, 98);