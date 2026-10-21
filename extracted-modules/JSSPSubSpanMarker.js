__d("JSSPSubSpanMarker", [
    "JSSPTraceBaseTransformer",
    "JSSelfProfilerUtils",
    "asyncToGeneratorRuntime",
    "interaction-tracing-metrics"
], function(t, n, r, o, a, i, l) {
    "use strict";
    const e = new Set([
        "LONGTASK",
        "INP",
        "LONG_ANIMATION_FRAME"
    ]);
    const s = 5;
    const u = 300;
    const c = ((t)=>{
        function r() {
            return t.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(r, t);
        const r_prototype = r.prototype;
        r_prototype.getSubSpanList = function(n) {
            const a = n.metadata?.interactionId;
            if (a == null) {
                return null;
            }
            const i = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a)?.subSpans;
            if (i == null) {
                return null;
            }
            const l = [];
            Object.entries(i).forEach(([n, r])=>{
                (r ?? []).forEach((t, r)=>{
                    let subSpanName = n;
                    if (e.has(n)) {
                        subSpanName = r < s ? `${n}_${r}` : `${n}_{N}`;
                    }
                    l.push({
                        start: t.start,
                        end: t.end,
                        subSpanName
                    });
                });
            });
            l.sort((e, t)=>e.start - t.start);
            return l;
        };
        r_prototype.transform = (()=>{
            const e = n("asyncToGeneratorRuntime").asyncToGenerator(function*(e) {
                const r = this;
                const a = this.getSubSpanList(e);
                const i = [];
                const l = new Map;
                if (a == null) {
                    return e;
                }
                e.metadata = e.metadata ?? {
                    subSpanNames: []
                };
                const s = e.metadata.subSpanNames ?? [];
                let s_length = s.length;
                function d(e) {
                    if (l.has(e)) {
                        return l.get(e) ?? -1;
                    }
                    l.set(e, s_length);
                    i.push(e);
                    return s_length++;
                }
                const m = function*(n) {
                    yield o("JSSelfProfilerUtils").nextEventLoop(function() {
                        return r.batchProcess(e, n, a, d);
                    });
                };
                for(let p = 0; p < e.samples.length; p += u){
                    yield* m(p);
                }
                if (e.metadata != null) {
                    e.metadata.subSpanNames = [].concat(s, i);
                }
                return e;
            });
            function t(t) {
                return e.apply(this, arguments);
            }
            return t;
        })();
        r_prototype.batchProcess = function(t, n, r, o) {
            for(var e = Math.min(n + u, t.samples.length), a = ()=>{
                const e = t.samples[i];
                r.forEach((t)=>{
                    if (t.start < e.timestamp && t.end > e.timestamp) {
                        e.subSpans = e.subSpans ?? [];
                        e.subSpans.push(o(t.subSpanName));
                    }
                });
            }, i = n; i < e; ++i){
                a();
            }
        };
        return r;
    })(r("JSSPTraceBaseTransformer"));
    l.default = c;
}, 98);