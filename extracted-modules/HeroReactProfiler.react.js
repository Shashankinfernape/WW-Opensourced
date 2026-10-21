__d("HeroReactProfiler.react", [
    "HeroTracingCoreConfig",
    "addAnnotations",
    "hero-tracing-placeholder",
    "interaction-tracing",
    "interaction-tracing-metrics",
    "react",
    "react-compiler-runtime"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = e || (e = o("react"));
    const u = e;
    const { useCallback, useContext } = u;
    const HeroReactProfilerNoOp = function({ children }) {
        return children;
    };
    HeroReactProfilerNoOp.displayName = "HeroReactProfilerNoOp";
    function HeroReactProfiler(e) {
        const t = o("react-compiler-runtime").c(19);
        const { children, id, isPagelet, logDurationToQPL } = e;
        const u = isPagelet === undefined ? false : isPagelet;
        const c = logDurationToQPL === undefined ? false : logDurationToQPL;
        const m = useContext(o("hero-tracing-placeholder").HeroInteractionContext.Context);
        const p = useContext(o("hero-tracing-placeholder").HeroInteractionIDContext);
        let _;
        if (t[0] !== m || t[1] !== p || t[2] !== u || t[3] !== c) {
            _ = function(t, n, a, i, l, s) {
                if (p != null) {
                    m.logReactRender(p, t, n, l, s, a, i, u, m.pageletStack);
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addReactRender(p, t, l, s, a, i, n);
                    if (c) {
                        r("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach((e)=>{
                            const n = e.getTrace();
                            if (n) {
                                const s = t.replace(/_[0-9]+$/, "_{N}");
                                const u = `ReactRenderDuration_${s}`;
                                const c = (n.annotations.int?.[u] ?? 0) + a;
                                r("addAnnotations")(n.annotations, {
                                    int: {
                                        [u]: c
                                    }
                                });
                            }
                        });
                    }
                }
            };
            t[0] = m;
            t[1] = p;
            t[2] = u;
            t[3] = c;
            t[4] = _;
        } else {
            _ = t[4];
        }
        const onRender = _;
        let g;
        if (t[5] !== m || t[6] !== p || t[7] !== u) {
            g = function(t, n, r, o) {
                if (p != null) {
                    m.logReactCommit(p, t, n, r, o, u, m.pageletStack);
                }
            };
            t[5] = m;
            t[6] = p;
            t[7] = u;
            t[8] = g;
        } else {
            g = t[8];
        }
        const onCommit = g;
        let y;
        if (t[9] !== m || t[10] !== p || t[11] !== u) {
            y = function(t, n, r, o) {
                if (p != null) {
                    m.logReactPostCommit(p, t, n, r, o, u, m.pageletStack);
                }
            };
            t[9] = m;
            t[10] = p;
            t[11] = u;
            t[12] = y;
        } else {
            y = t[12];
        }
        const onPostCommit = y;
        let b;
        if (t[13] !== children || t[14] !== id || t[15] !== onCommit || t[16] !== onPostCommit || t[17] !== onRender) {
            b = <s.Profiler id={id} onCommit={onCommit} onPostCommit={onPostCommit} onRender={onRender}>{children}</s.Profiler>;
            t[13] = children;
            t[14] = id;
            t[15] = onCommit;
            t[16] = onPostCommit;
            t[17] = onRender;
            t[18] = b;
        } else {
            b = t[18];
        }
        return b;
    }
    HeroReactProfiler.displayName = "HeroReactProfiler";
    const _ = s.Profiler != null && r("HeroTracingCoreConfig").enableReactProfiling ? HeroReactProfiler : HeroReactProfilerNoOp;
    l.default = _;
}, 98);