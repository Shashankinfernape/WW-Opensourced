__d("CometTailLoadLogger", [
    "CometTailLoadLoggerConfig",
    "QuickLogActionType",
    "QuickPerformanceLogger",
    "SiteData",
    "VisibilityListener",
    "gkx",
    "performanceNavigationStart",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 3000;
    const u = r("gkx")("6890");
    let c = 0;
    const d = r("performanceNavigationStart")();
    const m = new Map;
    const p = new Map;
    const _ = new Map;
    const f = new Set;
    const sessionId = r("uuidv4")();
    const h = new Set;
    function y() {
        m.clear();
        p.clear();
        _.clear();
        f.clear();
    }
    function C(t, n, a) {
        c++;
        if (u) {
            (e || (e = r("QuickPerformanceLogger"))).markerStart(o("CometTailLoadLoggerConfig").getQPLEvent(), c, a.current + d, {
                trackedForLoss: true
            });
        }
        const i = `${t}_${n}`;
        _.set(i, c);
    }
    function b(e, t) {
        p.set(e, t.current);
    }
    function v(e, t, n) {
        const r = `${e}_${t}`;
        m.set(r, n);
    }
    function S(t, n, a, i, tracePolicy) {
        const c = `${t}_${n}`;
        let interruptedConsumption = 0;
        const current = p.get(t) || a;
        const v = m.get(c);
        if (v != null) {
            interruptedConsumption = v;
            m.delete(c);
        }
        let S = _.get(c);
        if (S == null) {
            C(t, n, {
                current
            });
            S = _.get(c);
        }
        const R = o("VisibilityListener").getHiddenTime(current + r("performanceNavigationStart")(), a + r("performanceNavigationStart")());
        if (u) {
            (e || (e = r("QuickPerformanceLogger"))).markerAnnotate(o("CometTailLoadLoggerConfig").getQPLEvent(), {
                int: {
                    client_revision: r("SiteData").client_revision,
                    hidden: +(R != null && R > 0),
                    interruptedConsumption,
                    position: n,
                    windowHeight: Math.floor(window.innerHeight / 100)
                },
                string: {
                    client_push_phase: r("SiteData").push_phase,
                    pageletName: t,
                    sessionId,
                    tracePolicy
                }
            }, {
                instanceKey: S
            });
            e.markerEnd(o("CometTailLoadLoggerConfig").getQPLEvent(), i, S, a + d);
        }
        if (i !== 2 || i === 706 && interruptedConsumption >= s) {
            const scrollingFNLType = Object.keys(r("QuickLogActionType")).find((e)=>r("QuickLogActionType")[e] === i) || "UNKNOWN";
            h.add({
                position: n,
                scrollingFNLType,
                tracePolicy
            });
        }
        f.add(c);
        _.delete(c);
    }
    function R(e, t, n, r, o) {
        const a = `${e}_${t}`;
        const i = !f.has(a);
        if (i) {
            S(e, t, n, r, o);
        }
        f.delete(a);
    }
    function L() {
        return h;
    }
    l.alreadyFinishedMarkerKeys = f;
    l.reset = y;
    l.startTailLoadTracing = C;
    l.setTailLoadStartTime = b;
    l.reportInterruptedConsumption = v;
    l.endTailloadTracing = S;
    l.logMarkerEnd = R;
    l.dump = L;
}, 98);