__d("QPLCore", [
    "QPLCoreHelpers",
    "QPLEvent",
    "QPLMarkerMap",
    "QPLTimestamp",
    "QPLUtils",
    "QuickPerformanceLoggerTypes",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    function s(e) {
        if (e == null) {
            return e;
        }
        const t = {};
        for(const n in e){
            t[n] = String(e[n]);
        }
        return t;
    }
    function u(e) {
        if (e == null) {
            return e;
        }
        const t = {};
        for(const n in e){
            t[n] = e[n].map(String);
        }
        return t;
    }
    function c(e, t, n, r) {
        const a = t[e];
        if (!a || Object.entries(a).length === 0) {
            return null;
        }
        const i = {};
        Object.keys(a).forEach((e)=>{
            const t = a[e];
            if (t == null || t.length === 0) {
                delete a[e];
            } else if (r) {
                i[e] = r(t);
            } else {
                i[e] = t;
            }
        });
        return {
            [e]: babelHelpers.extends({}, n && n[e], i)
        };
    }
    function d(e, t) {
        if (e == null) {
            return t;
        }
        const n = babelHelpers.extends({}, t, c("string", e, t), c("int", e, t, Math.trunc), c("double", e, t), c("bool", e, t), c("string_array", e, t), c("int_array", e, t, function(e) {
            return e.map(Math.trunc);
        }), c("double_array", e, t), c("bool_array", e, t));
        Object.keys(n).forEach((e)=>{
            const t = n[e];
            if (t == null || Object.entries(t).length === 0) {
                delete n[e];
            }
        });
        if (Object.entries(n).length !== 0) {
            return n;
        }
        return null;
    }
    function m(e, t) {
        const n = {};
        if (g.isMarkerTracked(t)) {
            n.tracked_for_loss = true;
        }
        if (typeof t.absoluteTimeOrigin === "number") {
            n.absolute_time_origin_ns = o("QPLTimestamp").timestampToSerializedNanoseconds(t.absoluteTimeOrigin);
        }
        const r = babelHelpers.extends({}, e, n);
        return r;
    }
    function p(e, t) {
        if (!t) {
            return e;
        }
        const n = {};
        if (t.string) {
            n.annotations = t.string;
        }
        if (t.int) {
            n.annotations_int = s(t.int);
        }
        if (t.double) {
            n.annotations_double = t.double;
        }
        if (t.bool) {
            n.annotations_bool = t.bool;
        }
        if (t.string_array) {
            n.annotations_string_array = t.string_array;
        }
        if (t.int_array) {
            n.annotations_int_array = u(t.int_array);
        }
        if (t.double_array) {
            n.annotations_double_array = t.double_array;
        }
        if (t.bool_array) {
            n.annotations_bool_array = t.bool_array;
        }
        return babelHelpers.extends({}, e, n);
    }
    const _ = new Map([
        [
            o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING,
            "random_sampling"
        ],
        [
            o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING,
            "per_user"
        ]
    ]);
    function f(e, t) {
        if (e === 0) {
            return false;
        }
        if (e <= 1) {
            return true;
        }
        if (typeof t === "string") {
            return o("QPLUtils").unsignedCrc32(t) % e === 0;
        }
        return Math.random() * e <= 1;
    }
    var g = (()=>{
        function t(e) {
            this.$2 = 1;
            this.$3 = 100;
            this.$4 = new Map;
            this.$5 = new Map;
            this.$6 = null;
            this.$8 = new Map;
            this.activeMarkers = new Map;
            this.$1 = e;
            this.$7 = e.logger;
            this.$5 = e.listenersWithMarker ?? new Map;
            this.$9 = new (r("QPLMarkerMap"));
        }
        const t_prototype = t.prototype;
        t_prototype.$10 = function(t, n) {
            try {
                return n();
            } catch (error) {
                if (this.$1.onError) {
                    this.$1.onError(t, error);
                }
            }
        };
        t_prototype.getMarker = function(n, r) {
            const t = this;
            return this.$10("getMarker", function() {
                const a = t.$11((e || (e = o("QPLEvent"))).getMarkerId(n));
                if (!a) {
                    return null;
                }
                const i = a.get(r);
                return i || null;
            });
        };
        t_prototype.isMarkerOn = function(n, r = 0) {
            const a = this;
            return this.$10("isMarkerOn", function() {
                const t = a.$11((e || (e = o("QPLEvent"))).getMarkerId(n));
                if (!t) {
                    return false;
                }
                const i = t.get(r);
                return !!i;
            }) ?? false;
        };
        t.isMarkerTracked = function(t) {
            return t.trackedForLoss === true || t.type === 2;
        };
        t_prototype.$11 = function(t) {
            return this.activeMarkers.get(t);
        };
        t_prototype.addMarker = function(t, n, r) {
            let e = this.activeMarkers.get(t);
            if (!e) {
                e = new Map;
                this.activeMarkers.set(t, e);
            }
            e.set(n, r);
        };
        t_prototype.deleteMarker = function(t, n) {
            this.activeMarkers.get(t)?.delete(n);
            this.$12(t, n);
        };
        t_prototype.markerStart = function(r, a = 0, i, l) {
            const n = this;
            if (i === undefined) {
                i = this.currentTimestamp();
            }
            const { cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, samplingBasis = null, qplInternalDoNotUseAbsoluteTimeOrigin, timeoutMS = null, onMarkerTimeout__DoNotUse = null, enableE2ETracing = false, crashResilient = false } = l === undefined ? {} : l;
            this.$10("markerStart", function() {
                const l = n.getMarker(r, a);
                if (l) {
                    const time_between_markers_ms = Math.round(i - l.timestamp);
                    if (cancelExisting) {
                        n.markerAnnotate(r, {
                            string: {
                                cancelType: "DUPLICATE_EVENT"
                            },
                            int: {
                                time_between_markers_ms
                            }
                        }, {
                            instanceKey: a
                        });
                        n.markerEnd(r, 4, a, i);
                    }
                }
                const u = n.$13(r, samplingBasis);
                const passesSampling = u[0];
                const sampleRate = u[1];
                const samplingMethod = u[2];
                let h = null;
                if (enableE2ETracing) {
                    h = n.$1.e2eTracingIDGenerator ? n.$1.e2eTracingIDGenerator(r) : null;
                }
                const b = {
                    event: r,
                    passesSampling,
                    timestamp: i,
                    sampleRate,
                    samplingMethod,
                    points: [],
                    cancelOnUnload,
                    trackedForLoss,
                    type,
                    timeoutMS,
                    e2eTracingID: h,
                    isCrashResilient: crashResilient
                };
                if (typeof qplInternalDoNotUseAbsoluteTimeOrigin === "number") {
                    b.absoluteTimeOrigin = qplInternalDoNotUseAbsoluteTimeOrigin;
                }
                n.$4.forEach((e)=>{
                    if (e.onMarkerStart) {
                        e.onMarkerStart(r, a, i);
                    }
                });
                n.$5.forEach((e)=>{
                    e.onMarkerStartWithMarker(r, a, i, b);
                });
                if (passesSampling) {
                    n.addMarker((e || (e = o("QPLEvent"))).getMarkerId(r), a, b);
                    if (timeoutMS != null) {
                        n.$14(r, a, timeoutMS, onMarkerTimeout__DoNotUse);
                    }
                }
                if (passesSampling && t.isMarkerTracked(b)) {
                    n.$15({
                        marker_id: 27787271,
                        action_id: 51,
                        sample_rate: 1,
                        annotations_int: {
                            tracked_marker_id: String((e || (e = o("QPLEvent"))).getMarkerId(r))
                        },
                        marker_type: 1
                    });
                }
                if (h !== null) {
                    n.markerAnnotate(r, {
                        string: {
                            qpl_e2e__tracing_id: h
                        }
                    }, {
                        instanceKey: a
                    });
                }
                if (passesSampling) {
                    n.$4.forEach((e)=>{
                        if (e.onMarkerStarted) {
                            e.onMarkerStarted(r, a, i, n.$16(b));
                        }
                    });
                }
            });
        };
        t_prototype.$16 = function(t) {
            if (t == null) {
                const e = {
                    isCrashResilient: false
                };
                return e;
            }
            return {
                isCrashResilient: t.isCrashResilient
            };
        };
        t_prototype.$17 = function(t, n) {
            this.$9.delete(t, n);
        };
        t_prototype.$18 = function(t, n, r) {
            this.$9.set(t, n, r);
        };
        t_prototype.$12 = function(t, n) {
            let e;
            const r = this.$9.get(t, n);
            if (!(r == null || r === 0)) {
                if ((e = this.$1.runtimeAbstractionLayer) != null && e.clearTimeout) {
                    this.$1.runtimeAbstractionLayer.clearTimeout(r);
                    this.$17(t, n);
                }
            }
        };
        t_prototype.$14 = function(n, r, a, i) {
            const t = this;
            const l = (e || (e = o("QPLEvent"))).getMarkerId(n);
            try {
                let s;
                this.$12(l, r);
                if (!((s = this.$1.runtimeAbstractionLayer) != null && s.setTimeout)) {
                    return;
                }
                const c = this.$1.runtimeAbstractionLayer?.setTimeout(function() {
                    if (i != null) {
                        i(n, r);
                    }
                    t.$4.forEach((e)=>{
                        if (e.onTimeoutEvent != null) {
                            e.onTimeoutEvent({
                                event: n,
                                instanceKey: r,
                                passesSampling: true
                            });
                        }
                    });
                    t.$17(l, r);
                    t.markerEnd(n, 113, r);
                }, a);
                this.$18(l, r, c);
            } catch (e) {}
        };
        t_prototype.markerAnnotate = function(t, n, r) {
            const e = this;
            const { instanceKey = 0 } = r === undefined ? {} : r;
            this.$10("markerAnnotate", function() {
                e.$4.forEach((e)=>{
                    Object.keys(n).forEach((r)=>{
                        const o = n[r];
                        if (o) {
                            Object.keys(o).forEach((n)=>{
                                if (e.onAnnotation) {
                                    e.onAnnotation(t, instanceKey, n, o[n], r);
                                }
                            });
                        }
                    });
                });
                const r = e.getMarker(t, instanceKey);
                if (r) {
                    r.annotations = d(n, r.annotations);
                }
            });
        };
        t_prototype.markerPoint = function(t, n, r) {
            const e = this;
            const { instanceKey = 0, data, timestamp = this.currentTimestamp() } = r === undefined ? {} : r;
            this.$10("markerPoint", function() {
                e.$4.forEach((e)=>{
                    if (e.onMarkerPoint) {
                        e.onMarkerPoint(t, instanceKey, n, data, timestamp);
                    }
                });
                const r = e.getMarker(t, instanceKey);
                if (r) {
                    const o = {
                        name: n,
                        timeSinceStart: Math.trunc(timestamp - r.timestamp)
                    };
                    const a = d(data);
                    if (a) {
                        o.data = a;
                    }
                    r.points.push(o);
                }
            });
        };
        t_prototype.markerEnd = function(n, r, instance_id = 0, i) {
            const t = this;
            if (i === undefined) {
                i = this.currentTimestamp();
            }
            this.$10("markerEnd", function() {
                const l = t.getMarker(n, instance_id);
                if (!l) {
                    t.$4.forEach((e)=>{
                        const o = {
                            durationMs: 0,
                            passesSampling: false
                        };
                        if (e.onMarkerEnd) {
                            e.onMarkerEnd(r, n, instance_id, i, babelHelpers.extends({}, o, t.$16(l)));
                        }
                    });
                    return;
                }
                let action_id = r;
                const d = t.$19(l, l.timestamp, i);
                if (d && r === 2) {
                    action_id = 5947;
                }
                const points = l.points.map((e)=>{
                    if (e.data) {
                        return {
                            name: e.name,
                            timeSinceStart: String(e.timeSinceStart),
                            data: ((t, n, r, o, a, i, l, c)=>{
                                const d = {};
                                if (((t = e.data) == null ? undefined : t.string) != null) {
                                    d.string = e.data.string;
                                }
                                if (((n = e.data) == null ? undefined : n.string_array) != null) {
                                    d.string_array = e.data.string_array;
                                }
                                if (((r = e.data) == null ? undefined : r.int) != null) {
                                    d.int = s(e.data?.int);
                                }
                                if (((o = e.data) == null ? undefined : o.int_array) != null) {
                                    d.int_array = u(e.data?.int_array);
                                }
                                if (((a = e.data) == null ? undefined : a.double) != null) {
                                    d.double = e.data.double;
                                }
                                if (((i = e.data) == null ? undefined : i.double_array) != null) {
                                    d.double_array = e.data.double_array;
                                }
                                if (((l = e.data) == null ? undefined : l.bool) != null) {
                                    d.bool = e.data.bool;
                                }
                                if (((c = e.data) == null ? undefined : c.bool_array) != null) {
                                    d.bool_array = e.data.bool_array;
                                }
                                return d;
                            })()
                        };
                    }
                    return {
                        name: e.name,
                        timeSinceStart: String(e.timeSinceStart)
                    };
                });
                const g = {
                    marker_id: (e || (e = o("QPLEvent"))).getMarkerId(n),
                    action_id,
                    instance_id,
                    sample_rate: l.sampleRate,
                    method: _.get(l.samplingMethod),
                    duration_ns: o("QPLTimestamp").calculateDurationAsNanoseconds(l.timestamp, i),
                    points,
                    metadata: {
                        application_analytics: {
                            time_since_qpl_module_init: i - t.$1.moduleLoadTimestamp
                        }
                    },
                    marker_type: l.type,
                    flags: 1,
                    unique_marker_id_debug_only: l.uniqueMarkerDebugId
                };
                const h = p(g, l.annotations);
                const logData = m(h, l);
                t.$4.forEach((e)=>{
                    const t = {
                        durationMs: l ? i - l.timestamp : 0,
                        logData,
                        passesSampling: l.passesSampling,
                        isCrashResilient: l.isCrashResilient
                    };
                    if (e.onMarkerEnd) {
                        e.onMarkerEnd(action_id, n, instance_id, i, t);
                    }
                });
                if (l.passesSampling) {
                    if (l.timestampIsApproximate !== true) {
                        t.$15(logData);
                    }
                    if (t.$6 === (e || (e = o("QPLEvent"))).getMarkerId(n) && t.$1.onDebuggingIdEnded) {
                        t.$1.onDebuggingIdEnded();
                    }
                }
                t.deleteMarker(e.getMarkerId(n), instance_id);
            });
        };
        t_prototype.markerDrop = function(n, r = 0) {
            const t = this;
            this.$10("markerDrop", function() {
                const a = t.getMarker(n, r);
                t.deleteMarker((e || (e = o("QPLEvent"))).getMarkerId(n), r);
                const i = t.currentTimestamp();
                t.$4.forEach((e)=>{
                    if (e.onMarkerDrop) {
                        e.onMarkerDrop(n, r, i, babelHelpers.extends({
                            passesSampling: a?.passesSampling ?? false
                        }, t.$16(a)));
                    }
                });
            });
        };
        t_prototype.markEvent = function(n, da_type, da_level, i) {
            const t = this;
            const { timestamp = this.currentTimestamp(), annotations } = i === undefined ? {} : i;
            this.$10("markEvent", function() {
                let i;
                t.$4.forEach((e)=>{
                    if (e.onMarkEvent) {
                        e.onMarkEvent({
                            event: n,
                            timestamp,
                            annotations
                        });
                    }
                });
                if (!((i = t.$1.quickLogConfigHelper) != null && i.isKillswitchOn())) {
                    const l = t.$13(n);
                    const s = l[0];
                    const m = l[1];
                    const f = l[2];
                    if (s) {
                        const g = d(typeof annotations === "function" ? annotations() : annotations);
                        const h = {
                            marker_id: (e || (e = o("QPLEvent"))).getMarkerId(n),
                            action_id: 51,
                            instance_id: 0,
                            sample_rate: m,
                            method: _.get(f),
                            da_type,
                            da_level,
                            metadata: {
                                application_analytics: {
                                    time_since_qpl_module_init: timestamp - t.$1.moduleLoadTimestamp
                                }
                            },
                            marker_type: 1,
                            flags: 1
                        };
                        t.$15(p(h, g));
                    }
                }
            });
        };
        t_prototype.markerStartForJoin = function(t, samplingBasis, r) {
            const e = this;
            const { instanceKey = 0, cancelExisting = false, cancelOnUnload = false, trackedForLoss = false, type = 1, qplInternalDoNotUseAbsoluteTimeOrigin = null, timeoutMS = null, monotonicTimestamp = this.currentTimestamp(), absoluteTimeOriginMs = this.currentUnixTimestamp(), sourceIsPrimary = false, closeSession, onMarkerTimeout__DoNotUse, unreliableSourceClockProcessId, crashResilient, joinNamespaces, actionPriority } = r === undefined ? {} : r;
            this.$10("markerStartForJoin", function() {
                e.markerStart(t, instanceKey, monotonicTimestamp, {
                    cancelExisting,
                    cancelOnUnload,
                    trackedForLoss,
                    type,
                    samplingBasis,
                    qplInternalDoNotUseAbsoluteTimeOrigin,
                    timeoutMS,
                    onMarkerTimeout__DoNotUse,
                    crashResilient
                });
                const r = o("QPLCoreHelpers").generateJoinAnnotations(samplingBasis, absoluteTimeOriginMs, sourceIsPrimary, closeSession, unreliableSourceClockProcessId, joinNamespaces, actionPriority);
                e.markerAnnotate(t, r, {
                    instanceKey
                });
            });
        };
        t_prototype.addAlignmentPointForJoin = function(t, n, r) {
            const e = this;
            const { instanceKey = 0, requestId = "default_id", timestamp = this.currentTimestamp() } = r === undefined ? {} : r;
            this.$10("addAlignmentPointForJoin", function() {
                const r = o("QPLCoreHelpers").getAlignmentPointName(n, requestId);
                if (r != null) {
                    e.markerPoint(t, r, {
                        instanceKey,
                        timestamp
                    });
                }
            });
        };
        t_prototype.setAlwaysOnSampleRate = function(t, n) {
            this.$8.set(t, n);
        };
        t_prototype.setDefaultSampleRate = function(t) {
            this.$3 = t;
        };
        t_prototype.currentTimestamp = function() {
            const t = this;
            return this.$10("currentTimestamp", function() {
                return t.$1.monotonicNowMs();
            }) ?? 0;
        };
        t_prototype.currentUnixTimestamp = function() {
            const t = this;
            return this.$10("currentUnixTimestamp", function() {
                return t.$1.unixNowMs();
            }) ?? 0;
        };
        t_prototype.enableDebug = function(t) {
            this.$6 = t;
        };
        t_prototype.disableDebug = function() {
            this.$6 = null;
        };
        t_prototype.addListener = function(t) {
            const n = this;
            return this.$10("addListener", function() {
                const e = n.$2++;
                n.$4.set(e, t);
                return {
                    dispose: function() {
                        n.$4.delete(e);
                    }
                };
            }) ?? {
                dispose: function() {}
            };
        };
        t_prototype.$13 = function(n, r) {
            if (this.$1.unsampleAllEvents && this.$1.unsampleAllEvents() || this.$6 === (e || (e = o("QPLEvent"))).getMarkerId(n)) {
                return [
                    true,
                    1,
                    o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING
                ];
            }
            const i = (e || (e = o("QPLEvent"))).getSampleRate(n);
            const l = e.getSamplingMethod(n);
            if (this.$8.get(n) == null && i !== 0 && l === o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING) {
                return [
                    true,
                    i ?? 1,
                    o("QuickPerformanceLoggerTypes").USER_BASED_SAMPLING
                ];
            }
            const s = this.$8.get(n) ?? i ?? this.$3;
            const u = l ?? o("QuickPerformanceLoggerTypes").EVENT_BASED_SAMPLING;
            const c = f(s, r);
            return [
                c,
                s,
                u
            ];
        };
        t_prototype.$15 = function(t) {
            this.$4.forEach((e)=>{
                if (e.onUploadEvent) {
                    e.onUploadEvent(t);
                }
            });
            const e = this.$1.decorateEventBeforeUpload ? this.$1.decorateEventBeforeUpload(t) : t;
            this.$1.sendEvent(t, e);
        };
        t_prototype.$19 = function(t, n, r) {
            if (t.timeoutMS == null) {
                return false;
            }
            const e = r - n;
            return e >= t.timeoutMS;
        };
        t_prototype.getActiveMarkerIds = function(t) {
            const n = this;
            const t_type = t.type;
            return this.$10("getActiveMarkerIds", function() {
                const e = new Set;
                n.activeMarkers.forEach((t, n)=>{
                    t.forEach((t)=>{
                        if (t.type === t_type) {
                            e.add(n);
                            return;
                        }
                    });
                });
                return Array.from(e);
            }) ?? [];
        };
        t_prototype.getActiveE2ETraceIds = function() {
            const t = this;
            return this.$10("getActiveE2ETraceIds", function() {
                const e = new Map;
                t.activeMarkers.forEach((t, n)=>{
                    const r = new Map;
                    t.forEach((e, t)=>{
                        if (e.e2eTracingID != null) {
                            r.set(t, {
                                e2eTraceID: e.e2eTracingID,
                                qplEvent: e.event
                            });
                        }
                    });
                    if (r.size > 0) {
                        e.set(n, r);
                    }
                });
                return e;
            }) ?? new Map;
        };
        t_prototype.getActiveE2ETraceIdsAsArray = function() {
            const t = this;
            return this.$10("getActiveE2ETraceIdsAsArray", function() {
                const e = [];
                t.activeMarkers.forEach((t, n)=>{
                    t.forEach((t, n)=>{
                        if (t.e2eTracingID != null) {
                            e.push(t.e2eTracingID);
                        }
                    });
                });
                return e;
            }) ?? [];
        };
        t_prototype.forEachMarkerInstance = function(t, n) {
            const e = this;
            this.$10("forEachMarkerInstance", function() {
                const r = e.$11(t);
                if (r) {
                    for (const [a, i] of r.entries()){
                        n(a, i.event);
                    }
                }
            });
        };
        t_prototype.getMarkerStartTs = function(t, n) {
            const e = this;
            const { instanceKey = 0 } = n === undefined ? {} : n;
            return this.$10("getMarkerStartTs", function() {
                const n = e.getMarker(t, instanceKey);
                if (n) {
                    return n.timestamp;
                }
            });
        };
        t_prototype.markerLogDebugPoints = function(n, a) {
            const t = this;
            const { instanceKey = 0 } = a === undefined ? {} : a;
            this.$10("markerLogDebugPoints", function() {
                const a = (e || (e = o("QPLEvent"))).getMarkerId(n);
                const i = t.getMarker(n, instanceKey);
                if (i) {
                    const l = r("uuidv4")();
                    i.uniqueMarkerDebugId = l;
                }
            });
        };
        return t;
    })();
    g.normalizeAnnotations = d;
    l.default = g;
}, 98);