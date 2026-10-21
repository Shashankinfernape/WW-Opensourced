__d("useCometInteractionTracing", [
    "CometAddInlineTiming",
    "CometInteractionTracingConfig",
    "CometOfflineTracing",
    "InteractionTracing",
    "forEachObject",
    "gkx",
    "nullthrows",
    "react",
    "react-compiler-runtime",
    "useGetCometRouteTracePolicy",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef } = s;
    let d = 0;
    function m() {
        return d++;
    }
    function useP(e, t, n, a, i) {
        const l = o("react-compiler-runtime").c(8);
        const s = r("useGetCometRouteTracePolicy")();
        let u;
        if (l[0] === Symbol.for("react.memo_cache_sentinel")) {
            u = m();
            l[0] = u;
        } else {
            u = l[0];
        }
        const dRef = useRef(`${u}`);
        let p;
        if (l[1] !== i || l[2] !== s || l[3] !== t || l[4] !== e || l[5] !== a || l[6] !== n) {
            p = function(u, c, m, p, f, g) {
                const y = g ?? o("CometInteractionTracingConfig").tracingConfig;
                const C = r("uuidv4")();
                const b = p ?? a ?? s() ?? "comet.app";
                let v = `${b}_${dRef.current}${f != null ? `_${f}` : ""}`;
                v = `${b}${f ?? dRef.current}`;
                let S = null;
                r("InteractionTracing").trace(e, function(e) {
                    S = e;
                    const t = r("InteractionTracing").checkAndMarkRevisit(b);
                    const n = r("InteractionTracing").checkAndMarkRevisit(v);
                    e.addMetadata("revisit", t ? 1 : 0);
                    e.addMetadata("is_mobile", r("gkx")("22968"));
                    e.addMetadata("instance_revisit", n ? 1 : 0);
                    if (i != null) {
                        r("forEachObject")(i, function(t, n) {
                            if (n != null && t != null) {
                                e.addMetadata(n, t);
                            }
                        });
                    }
                    e.addAnnotationInt(o("CometOfflineTracing").OFFLINE_NETWORK_STATUS_ANNOTATION, o("CometOfflineTracing").getOfflineCount());
                    e.onComplete(_);
                    u(e);
                }, t, n, b, C, c, m, y);
                return r("nullthrows")(S);
            };
            l[1] = i;
            l[2] = s;
            l[3] = t;
            l[4] = e;
            l[5] = a;
            l[6] = n;
            l[7] = p;
        } else {
            p = l[7];
        }
        return p;
    }
    function _(e) {
        o("CometAddInlineTiming").addServerTags(e.traceId);
    }
    l.default = useP;
}, 98);