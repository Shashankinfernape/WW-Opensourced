__d("InteractionTracingLoomProvider", [
    "interaction-tracing-metrics",
    "sanitizeURIStringForLoom"
], function(t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
        return e.substr(0, 7) === "http://" || e.substr(0, 8) === "https://";
    }
    class s {
        constructor(e, t, n){
            this.$1 = e;
            this.$2 = t;
            this.$3 = n;
        }
        $4(n) {
            if (this.$3.sanitizeURIs && e(n)) {
                return r("sanitizeURIStringForLoom")(n, this.$2);
            }
            return n;
        }
        $5(t, n) {
            const e = this.$1;
            if (e) {
                e.buffer.addEvent(t, n + this.$3.appStart);
            }
        }
        $6(t, n) {
            const e = this;
            const t_subSpans = t.subSpans;
            const o = (execUnitName)=>{
                t_subSpans[execUnitName].forEach((r, o)=>{
                    const i = {
                        blockName: `${execUnitName}_${o}`,
                        blockType: r.type,
                        execUnitName,
                        traceId: n,
                        traceType: t.type
                    };
                    e.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, i), r.start);
                    e.$5(babelHelpers.extends({
                        blockAnnotations: r.data,
                        type: "INTERACTION_TRACE_END"
                    }, i), r.end);
                });
            };
            for(const a in t_subSpans){
                o(a);
            }
        }
        $7(t, n) {
            const t_payloadResources = t.payloadResources;
            for(const r in t_payloadResources){
                const o = t_payloadResources[r];
                const a = this.$4(r);
                const i = {
                    blockName: a,
                    blockType: "PayloadResources",
                    execUnitName: o.initiator,
                    traceId: n,
                    traceType: t.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, i), o.start);
                this.$5({
                    blockName: a,
                    execUnitName: o.initiator,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: n,
                    type: "INTERACTION_TRACE_POINT"
                }, o.requestStart);
                this.$5(babelHelpers.extends({
                    blockAnnotations: {
                        refs: o.refs.join(","),
                        transferSize: o.transferSize,
                        url: this.$4(o.url)
                    },
                    type: "INTERACTION_TRACE_END"
                }, i), o.end);
            }
        }
        $8(t, n) {
            const t_imagePreloaderTimings = t.imagePreloaderTimings;
            for(const r in t_imagePreloaderTimings){
                const o = t_imagePreloaderTimings[r];
                const a = this.$4(r);
                const i = {
                    blockName: a,
                    blockType: "ImagePreloaders",
                    execUnitName: o.playloadName,
                    traceId: n,
                    traceType: t.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, i), o.start);
                this.$5({
                    blockName: a,
                    execUnitName: o.playloadName,
                    pointAnnotations: {},
                    pointName: "requestStart",
                    traceId: n,
                    type: "INTERACTION_TRACE_POINT"
                }, o.requestStart);
                this.$5(babelHelpers.extends({
                    blockAnnotations: {
                        url: a
                    },
                    type: "INTERACTION_TRACE_END"
                }, i), o.end);
            }
        }
        $9(t, n) {
            const e = this;
            const t_payloadTimings = t.payloadTimings;
            const o = (a)=>{
                const o = t_payloadTimings[a];
                if (o.start == null || o.end == null) {
                    return {
                        v: undefined
                    };
                }
                const i = {
                    blockName: a,
                    blockType: o.payloadType,
                    execUnitName: a,
                    traceId: n,
                    traceType: t.type
                };
                e.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, i), o.start);
                Object.keys(o.points).forEach((pointName)=>{
                    e.$5({
                        blockName: a,
                        execUnitName: a,
                        pointAnnotations: {},
                        pointName,
                        traceId: n,
                        type: "INTERACTION_TRACE_POINT"
                    }, o.points[pointName]);
                });
                const blockAnnotations = babelHelpers.extends({}, o.data);
                for(const s in o.pkgStat){
                    const u = o.pkgStat[s];
                    for(const c in u){
                        blockAnnotations[`${s}_${c}`] = u[c];
                    }
                }
                e.$5(babelHelpers.extends({
                    blockAnnotations,
                    type: "INTERACTION_TRACE_END"
                }, i), o.end);
            };
            let a;
            for(const i in t_payloadTimings){
                a = o(i);
                if (a) {
                    return a.v;
                }
            }
        }
        $10(t, n) {
            const t_markerPoints = t.markerPoints;
            for(const r in t_markerPoints){
                const o = t_markerPoints[r];
                const { timestamp, type } = o;
                const l = {
                    blockName: r,
                    blockType: type,
                    execUnitName: r,
                    traceId: n,
                    traceType: t.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, l), timestamp);
                this.$5(babelHelpers.extends({
                    blockAnnotations: o.data || {},
                    type: "INTERACTION_TRACE_END"
                }, l), timestamp);
            }
        }
        $11(t, n) {
            const t_requireDeferreds = t.requireDeferreds;
            for(const r in t_requireDeferreds){
                const o = t_requireDeferreds[r];
                const a = {
                    blockName: r,
                    blockType: "RequireDeferreds",
                    execUnitName: r,
                    traceId: n,
                    traceType: t.type
                };
                const i = o.end;
                if (i != null) {
                    this.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, a), o.start);
                    this.$5(babelHelpers.extends({
                        blockAnnotations: {
                            alreadyRequired: !!o.alreadyRequired
                        },
                        type: "INTERACTION_TRACE_END"
                    }, a), i);
                }
            }
        }
        $12(blockType, n, r, o) {
            for(let e = 0; e < o.length; e++){
                const a = {
                    blockName: `${blockType}_${e}`,
                    blockType,
                    execUnitName: `${blockType}_${e}`,
                    traceId: r,
                    traceType: n.type
                };
                this.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, a), o[e].start);
                this.$5(babelHelpers.extends({
                    blockAnnotations: {},
                    type: "INTERACTION_TRACE_END"
                }, a), o[e].end);
            }
        }
        $13(t) {
            const e = this;
            if (t.vcStateLog != null) {
                t.vcStateLog.forEach(([o, a], r)=>{
                    const i = {
                        blockName: r,
                        blockType: "VCState",
                        execUnitName: "VCState",
                        traceId: t.traceId,
                        traceType: t.type
                    };
                    e.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, i), o);
                    e.$5(babelHelpers.extends({
                        blockAnnotations: {},
                        type: "INTERACTION_TRACE_END"
                    }, i), a);
                });
            }
            if (t.vcMutationLog != null) {
                t.vcMutationLog.forEach((n)=>{
                    const a = n.finalState ?? "";
                    const i = {
                        blockName: `${n.mutationType}_${a}_${n.veid}`,
                        blockType: "VCMutation",
                        execUnitName: n.finalState ?? "mutation",
                        traceId: t.traceId,
                        traceType: t.type
                    };
                    e.$5(babelHelpers.extends({
                        type: "INTERACTION_TRACE_START"
                    }, i), n.mutationTime);
                    e.$5(babelHelpers.extends({
                        blockAnnotations: {
                            data: JSON.stringify(n)
                        },
                        type: "INTERACTION_TRACE_END"
                    }, i), n.paintTime);
                });
            }
        }
        $14(t) {
            const e = this;
            t.factoryTimings.forEach((n)=>{
                const r = {
                    blockName: n.name,
                    blockType: "Factories",
                    execUnitName: "Factories",
                    traceId: t.traceId,
                    traceType: t.type
                };
                e.$5(babelHelpers.extends({
                    type: "INTERACTION_TRACE_START"
                }, r), n.start);
                e.$5(babelHelpers.extends({
                    blockAnnotations: {},
                    type: "INTERACTION_TRACE_END"
                }, r), n.end);
            });
        }
        loomTraceWillEnd() {
            const e = this;
            const t = this.$1;
            if (t) {
                const n = o("interaction-tracing-metrics").InteractionTracingMetricsCore.dump();
                const r = [];
                if (t.triggerInfo.type === "INTERACTION" && t.triggerInfo.interaction_id != null) {
                    r.push(t.triggerInfo.interaction_id);
                } else {
                    for(const a in n){
                        const i = n[a];
                        const l = i.completed != null ? this.$3.appStart + i.completed : null;
                        if (l == null || l > t.startTime) {
                            r.push(a);
                        }
                    }
                }
                r.forEach((t)=>{
                    const r = n[t];
                    e.$6(r, t);
                    e.$10(r, t);
                    e.$11(r, t);
                    e.$7(r, t);
                    e.$8(r, t);
                    e.$9(r, t);
                    e.$12("hidden", r, t, r.hiddenTimings);
                    e.$12("offline", r, t, r.offlineTimings);
                    e.$14(r);
                    e.$13(r);
                });
            }
        }
    }
    const u = {
        getInstance: function(t, n, r) {
            return new s(t, n, r);
        },
        isSupported: function() {
            return true;
        },
        loomProviderId: "InteractionTracing"
    };
    l.default = u;
}, 98);