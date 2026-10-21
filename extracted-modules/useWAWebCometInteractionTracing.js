__d("useWAWebCometInteractionTracing", [
    "CometInteractionTracingConfig",
    "WAWebEnvironment",
    "gkx",
    "qpl",
    "react",
    "react-compiler-runtime",
    "useCometInteractionTracing"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const { useCallback, useRef, useState } = s;
    const m = 300;
    function useP(e, t, n) {
        const a = o("react-compiler-runtime").c(16);
        const i = t === undefined ? false : t;
        const l = n === undefined ? 60 : n;
        const s = i ? "contingent" : "responsive";
        const u = i ? "NAVIGATION" : "INTERACTION";
        let m;
        if (a[0] !== i) {
            m = i ? r("qpl")._(858069944, "1880") : r("qpl")._(858062849, "3741");
            a[0] = i;
            a[1] = m;
        } else {
            m = a[1];
        }
        const p = m;
        let environment;
        if (a[2] === Symbol.for("react.memo_cache_sentinel")) {
            environment = r("WAWebEnvironment").getEnvironment();
            a[2] = environment;
        } else {
            environment = a[2];
        }
        let f;
        if (a[3] === Symbol.for("react.memo_cache_sentinel")) {
            f = {
                subplatform: r("WAWebEnvironment").isWindows ? "hybrid" : "web",
                environment,
                is_compiler_enabled: r("gkx")("7685")
            };
            a[3] = f;
        } else {
            f = a[3];
        }
        const g = r("useCometInteractionTracing")(p, s, u, e, f);
        const h = useState(null);
        const traceIdState = h[0];
        const C = h[1];
        const b = useState(false);
        const interactionIsInFlight = b[0];
        const S = b[1];
        const RRef = useRef(null);
        let L;
        if (a[4] !== g || a[5] !== l) {
            L = function(t, n, r, a, i) {
                const e = babelHelpers.extends({}, o("CometInteractionTracingConfig").tracingConfig, {
                    timeout: l * 1000
                });
                S(true);
                g(function(e) {
                    C(e.getTraceId());
                    RRef.current = e;
                    t?.(e);
                }, n, r, a, i, e);
            };
            a[4] = g;
            a[5] = l;
            a[6] = L;
        } else {
            L = a[6];
        }
        const E = L;
        let k;
        if (a[7] === Symbol.for("react.memo_cache_sentinel")) {
            k = function(t, n) {
                const e = t === undefined ? false : t;
                const r = n === undefined ? false : n;
                if (e) {
                    RRef.current?.forceCompleteTrace();
                }
                if (r) {
                    RRef.current?.cancelTrace("Removed attachment", true);
                }
                S(false);
            };
            a[7] = k;
        } else {
            k = a[7];
        }
        const completeInteraction = k;
        let T;
        if (a[8] === Symbol.for("react.memo_cache_sentinel")) {
            T = function(t) {
                const t_name = t.name;
                RRef.current?.addAnnotation("errorName", t_name);
                RRef.current?.failTrace(t.message ?? "Unknown error", true);
                S(false);
            };
            a[8] = T;
        } else {
            T = a[8];
        }
        const failInteraction = T;
        let x;
        if (a[9] === Symbol.for("react.memo_cache_sentinel")) {
            x = function(t) {
                RRef.current?.addMarkerPoint(t, "AppTiming");
            };
            a[9] = x;
        } else {
            x = a[9];
        }
        const addMarkerPoint = x;
        let P;
        if (a[10] === Symbol.for("react.memo_cache_sentinel")) {
            P = function(t) {
                Object.entries(t).forEach(([n, r])=>{
                    RRef.current?.addAnnotation(n, r);
                });
            };
            a[10] = P;
        } else {
            P = a[10];
        }
        const addAnnotation = P;
        let M;
        if (a[11] === Symbol.for("react.memo_cache_sentinel")) {
            M = function(t, n, r) {
                if (n) {
                    const o = r ? `${t}:test` : `${t}:control`;
                    RRef.current?.addAnnotation("experimentExposure", o);
                }
            };
            a[11] = M;
        } else {
            M = a[11];
        }
        const addExperimentExposure = M;
        let A;
        if (a[12] !== interactionIsInFlight || a[13] !== E || a[14] !== traceIdState) {
            A = {
                addAnnotation,
                addExperimentExposure,
                addMarkerPoint,
                completeInteraction,
                failInteraction,
                interactionIsInFlight,
                startInteraction: E,
                traceIdState
            };
            a[12] = interactionIsInFlight;
            a[13] = E;
            a[14] = traceIdState;
            a[15] = A;
        } else {
            A = a[15];
        }
        return A;
    }
    l.default = useP;
}, 98);