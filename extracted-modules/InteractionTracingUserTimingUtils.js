__d("InteractionTracingUserTimingUtils", [
    "TraceGroupConstants"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e({ UserTimingUtils }, t, n, r, a) {
        if (!(UserTimingUtils == null || r.enableUserTimings !== true)) {
            const l = t.traceId.slice(0, 3);
            const f = `${o("TraceGroupConstants").COMET_PERFORMANCE_TRACE_GROUP} - ${n}(#id=${a})`;
            s(UserTimingUtils, t, n, l, f);
            u(UserTimingUtils, t, l, r, f);
            c(UserTimingUtils, t, l, r, f);
            d(UserTimingUtils, t, l, f);
            m(UserTimingUtils, t, l, f);
            p(UserTimingUtils, t, l, r, f);
            _(UserTimingUtils, t, l, f);
        }
    }
    function s(UserTimingUtils, t, n, r, o) {
        if (t.completed != null) {
            UserTimingUtils.measureModern(`Interaction(${n})[${r}]`, {
                end: t.completed,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.visuallyComplete) {
            UserTimingUtils.measureModern(`VisuallyComplete(${n})[${r}]`, {
                end: t.markerPoints.visuallyComplete.timestamp,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.vcWithoutImage) {
            UserTimingUtils.measureModern(`VCWithoutImage(${n})[${r}]`, {
                end: t.markerPoints.vcWithoutImage.timestamp,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.heroTrace_start) {
            UserTimingUtils.measureModern(`HeroTraceStart[${r}]`, {
                end: t.markerPoints.heroTrace_start.timestamp,
                start: t.start
            }, "Interaction Timeline", o);
        }
        if (t.markerPoints.heroTrace_end) {
            const a = t.markerPoints.heroTrace_end.timestamp;
            UserTimingUtils.measureModern(`HeroTraceEnd[${r}]`, {
                end: a,
                start: t.start
            }, "Interaction Timeline", o);
        }
    }
    function u(UserTimingUtils, t, n, r, o) {
        if (!(r.enableUserTimingsVerbose !== true || !t.vcStateLog)) {
            t.vcStateLog.forEach(([a, i], r)=>{
                UserTimingUtils.measureModern(`${r}[${n}]`, {
                    end: i,
                    start: a
                }, "VC Tracker State", o);
            });
        }
    }
    function c(UserTimingUtils, t, n, r, trackGroup) {
        if (!(r.enableUserTimingsVerbose !== true || !t.vcMutationLog)) {
            t.vcMutationLog.forEach((t)=>{
                const a = t.finalState ?? "";
                const i = `${t.mutationType}/finalState=${a}/id=${t.veid}[${n}]`;
                const properties = [];
                for (const [u, c] of Object.entries(t)){
                    if (c != null) {
                        properties.push([
                            u,
                            String(JSON.stringify(c))
                        ]);
                    }
                }
                UserTimingUtils.measureModern(i, {
                    detail: {
                        devtools: {
                            dataType: "track-entry",
                            properties,
                            track: "VC DOM Mutation",
                            trackGroup
                        }
                    },
                    end: t.paintTime,
                    start: t.mutationTime
                });
            });
        }
    }
    function d(UserTimingUtils, t, n, r) {
        const o = (a)=>{
            const o = t.reactRender[a];
            o.forEach((t, o)=>{
                const i = `${String.fromCodePoint(9883)} ${a}[${t.phase}]#${o}[${n}]`;
                UserTimingUtils.measureModern(i, {
                    end: t.end,
                    start: t.start
                }, "React Render", r);
            });
        };
        for(const a in t.reactRender){
            o(a);
        }
    }
    function m(UserTimingUtils, t, n, r) {
        for(const o in t.payloadTimings){
            const a = t.payloadTimings[o];
            const i = `${a.payloadType}:${o}[${n}]`;
            UserTimingUtils.measureModern(i, {
                end: a.end,
                start: a.start
            }, "Payload Timing", r);
        }
    }
    function p(UserTimingUtils, t, n, r, o) {
        if (r.enableUserTimingsVerbose === true) {
            const a = new Set([
                "RelayFlush",
                "HeroRendering",
                "ReactRender",
                "VC",
                "VCWithoutImage",
                "Error"
            ]);
            const i = (i)=>{
                const r = t.subSpans[i];
                let l = null;
                let s = null;
                r.forEach((t, r)=>{
                    if (t.type === "HeroTracing") {
                        const c = t.data?.spanType;
                        const d = typeof c === "string" ? c : "HeroTracing";
                        if (a.has(d)) {
                            const m = d === "VC" || d === "VCWithoutImage" ? "Pagelet" : d;
                            let p = t.start;
                            if (l !== null && s !== null && t.start === l) {
                                p = s;
                            }
                            const _ = `${i}[${m}]#${r}[${n}]`;
                            UserTimingUtils.measureModern(_, {
                                end: t.end,
                                start: p
                            }, "HeroTracing", o);
                            l = t.start;
                            s = t.end;
                        }
                    }
                });
            };
            for(const l in t.subSpans){
                i(l);
            }
        }
    }
    function _(UserTimingUtils, t, n, r) {
        for(const o in t.placeholderMap){
            const a = t.placeholderMap[o];
            a.forEach((t, o)=>{
                if (t.endTime != null) {
                    const l = t.description ?? "unknown";
                    const s = t.spanType ?? "unknown";
                    const u = `${l}[${s}]#${o}[${n}]`;
                    UserTimingUtils.measureModern(u, {
                        end: t.endTime,
                        start: t.startTime
                    }, "Placeholders", r);
                }
            });
        }
    }
    l.markInteraction = e;
}, 98);