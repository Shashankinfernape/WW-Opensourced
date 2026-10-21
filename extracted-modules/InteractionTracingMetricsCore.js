__d("InteractionTracingMetricsCore", [
    "addAnnotations",
    "addJoinId",
    "hero-tracing-placeholder",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new Map;
    const u = new Map;
    const c = new Map;
    const d = {
        string: {},
        int: {},
        double: {},
        bool: {},
        string_array: {},
        int_array: {},
        double_array: {},
        bool_array: {}
    };
    const m = {
        interactionCount: 0
    };
    const p = 10000;
    const currentInteractionLogger = function() {
        const e = new Map(c);
        const t = (n)=>{
            e.forEach((e)=>{
                n(e);
            });
        };
        var n = {
            addGlobalMetadata: function(t, o) {
                if (typeof o === "number") {
                    r("addAnnotations")(d, {
                        int: {
                            [t]: o
                        }
                    });
                } else if (typeof o === "string") {
                    r("addAnnotations")(d, {
                        string: {
                            [t]: o
                        }
                    });
                } else if (typeof o === "boolean") {
                    r("addAnnotations")(d, {
                        bool: {
                            [t]: o
                        }
                    });
                }
                n.addMetadata(t, o);
            },
            addMetadata: function(n, o) {
                t((e)=>{
                    if (typeof o === "number") {
                        r("addAnnotations")(e.annotations, {
                            int: {
                                [n]: o
                            }
                        });
                    } else if (typeof o === "string") {
                        r("addAnnotations")(e.annotations, {
                            string: {
                                [n]: o
                            }
                        });
                    } else if (typeof o === "boolean") {
                        r("addAnnotations")(e.annotations, {
                            bool: {
                                [n]: o
                            }
                        });
                    }
                });
            },
            addRequireDeferred: function(n, r) {
                const e = [];
                t((t)=>{
                    if (t.requireDeferreds[n] == null) {
                        const o = t.requireDeferreds[n] = {
                            start: r
                        };
                        e.push(o);
                    }
                });
                return function(t, n) {
                    e.forEach((e)=>{
                        e.end = t;
                        e.duration = t - r;
                        if (n) {
                            e.alreadyRequired = true;
                        }
                    });
                };
            },
            forEach: function(n) {
                t((e)=>{
                    n(e);
                });
            }
        };
        return n;
    };
    var f = {
        addFactoryTiming: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.factoryTimings.push(n);
            }
        },
        addGlobalMetadata: function(t, n, o) {
            if (typeof o === "number") {
                r("addAnnotations")(d, {
                    int: {
                        [n]: o
                    }
                });
                f.addAnnotationInt(t, n, o);
            } else if (typeof o === "string") {
                r("addAnnotations")(d, {
                    string: {
                        [n]: o
                    }
                });
                f.addAnnotation(t, n, o);
            } else if (typeof o === "boolean") {
                r("addAnnotations")(d, {
                    bool: {
                        [n]: o
                    }
                });
                f.addAnnotationBoolean(t, n, o);
            }
        },
        addJoinId: function(t, n, o) {
            const e = c.get(t);
            if (e != null) {
                r("addJoinId")(e, n, o);
            }
        },
        addHeroBootload: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.heroBootloads.push(n);
            }
        },
        addHeroRelay: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.heroRelay.push(n);
            }
        },
        addHeroPendingPlaceholders: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.pendingPlaceholders = e.pendingPlaceholders.concat(n);
            }
        },
        addHiddenTiming: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.hiddenTimings = n;
            }
        },
        addImagePreloader: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                e.imagePreloaderTimings[n] = r;
            }
        },
        addMarkerPoint: function(n, o, a, i = (e || (e = r("performanceNow")))(), l) {
            const t = u.get(n);
            if (t && i >= t.start) {
                t.markerPoints[o] = {
                    timestamp: i,
                    type: a
                };
                if (l) {
                    t.markerPoints[o].data = l;
                }
            }
        },
        addFirstMarkerPoint: function(t, n, r, o, a = {}) {
            const e = u.get(t);
            if (!e) {
                return false;
            }
            const i = e.markerPoints[n];
            if (o >= e.start && (!i || i.timestamp > o)) {
                e.markerPoints[n] = {
                    timestamp: o,
                    type: r
                };
                if (a != null) {
                    e.markerPoints[n].data = a;
                }
                return true;
            }
            return false;
        },
        addMetadata: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                if (typeof o === "number") {
                    r("addAnnotations")(e.annotations, {
                        int: {
                            [n]: o
                        }
                    });
                } else if (typeof o === "string") {
                    r("addAnnotations")(e.annotations, {
                        string: {
                            [n]: o
                        }
                    });
                } else if (typeof o === "boolean") {
                    r("addAnnotations")(e.annotations, {
                        bool: {
                            [n]: o
                        }
                    });
                }
            }
        },
        addAnnotation: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    string: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationInt: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    int: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationDouble: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    double: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationBoolean: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    bool: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationStringArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    string_array: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationIntArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    int_array: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationDoubleArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    double_array: {
                        [n]: o
                    }
                });
            }
        },
        addAnnotationBooleanArray: function(t, n, o) {
            const e = u.get(t);
            if (e) {
                r("addAnnotations")(e.annotations, {
                    bool_array: {
                        [n]: o
                    }
                });
            }
        },
        addOfflineTiming: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.offlineTimings = n;
            }
        },
        addPayloadResource: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                e.payloadResources[n] = r;
            }
        },
        addPayloadTiming: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                e.payloadTimings[n] = r;
            }
        },
        addReactRender: function(t, n, r, o, actualDuration, baseDuration, l) {
            const e = u.get(t);
            if (e) {
                const s = {
                    actualDuration,
                    baseDuration,
                    duration: o - r,
                    end: o,
                    phase: l,
                    start: r
                };
                const c = e.reactRender[n];
                if (c) {
                    if (c.length < p) {
                        c.push(s);
                        e.commitSet.add(o);
                    }
                } else {
                    e.reactRender[n] = [
                        s
                    ];
                    e.commitSet.add(o);
                }
            }
        },
        addSubspan: function(t, n, r, o, a, i) {
            const e = u.get(t);
            if (e) {
                const l = {
                    data: i,
                    end: a,
                    start: o,
                    type: r
                };
                if (e.subSpans[n]) {
                    e.subSpans[n].push(l);
                } else {
                    e.subSpans[n] = [
                        l
                    ];
                }
            }
        },
        addMountPoint: function(t, n, r) {
            const e = `Mount_${r}`;
            f.addFirstMarkerPoint(t, e, "VisualCompletion", n);
        },
        addMountPointMetadata: function(t, n, r) {
            const e = f.get(t);
            const o = `Mount_${n}`;
            const a = e?.markerPoints[o];
            if (a) {
                const i = a.data || {};
                a.data = i;
                Object.keys(r).forEach((e)=>{
                    i[e] = r[e];
                });
            }
        },
        addTag: function(t, n, r) {
            const e = u.get(t);
            if (e) {
                if (!e.tagSet[n]) {
                    e.tagSet[n] = new Set;
                }
                e.tagSet[n].add(r);
            }
        },
        addTracedInteraction: function(t, n, r) {
            const e = {
                annotations: {
                    string: {},
                    int: {},
                    double: {},
                    bool: {},
                    string_array: {},
                    int_array: {},
                    double_array: {},
                    bool_array: {}
                },
                commitSet: new Set,
                factoryTimings: [],
                hasVcReport: false,
                heroBootloads: [],
                heroRelay: [],
                hiddenTimings: [],
                imagePreloaderTimings: {},
                markerPoints: {},
                navigationTiming: {},
                offlineTimings: [],
                payloadResources: {},
                payloadTimings: {},
                pendingPlaceholders: [],
                placeholderMap: {},
                reactRender: {},
                requireDeferreds: {},
                start: n,
                subSpans: {},
                tagSet: {},
                traceId: t,
                vcStateLog: null,
                vcMutationLog: null,
                wasCanceled: false,
                wasOffline: false
            };
            for(const o in d){
                for(const a in d[o]){
                    e.annotations[o][a] = d[o][a];
                }
            }
            u.set(t, e);
            c.set(t, e);
            s.set(t, r);
            m.interactionCount++;
            return e;
        },
        complete: function(n) {
            const t = u.get(n);
            if (t && t.completed == null) {
                r("addAnnotations")(t.annotations, {
                    int: {
                        endedByHeroComplete: 1
                    }
                });
                t.completed = (e || (e = r("performanceNow")))();
                const o = s.get(n);
                if (o) {
                    o(t);
                }
                s.delete(n);
                c.delete(n);
            }
        },
        currentInteractionLogger,
        dump: function() {
            const e = {};
            const t = Array.from(u.values());
            t.sort((e, t)=>e.start - t.start).forEach((t)=>{
                const t_traceId = t.traceId;
                const pendingPlaceholders = o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(t.traceId);
                e[t_traceId] = babelHelpers.extends({}, t, {
                    pendingPlaceholders,
                    e2e: t.completed != null ? ((t.completed - t.start) / 1000).toFixed(2) : "?"
                });
            });
            return e;
        },
        get: function(t) {
            return u.get(t);
        },
        markPlaceholderEnd: function(n, o, a, i = (e || (e = r("performanceNow")))()) {
            const t = u.get(n);
            if (t) {
                const l = t.placeholderMap;
                if (l[o]) {
                    l[o].forEach((e)=>{
                        if (e.endTime == null && a === e.description) {
                            e.endTime = i;
                        }
                    });
                }
            }
        },
        markPlaceholderStart: function(t, n, r, description, a) {
            const e = u.get(t);
            if (e) {
                const i = e.placeholderMap;
                const l = {
                    description,
                    startTime: r,
                    endTime: null,
                    spanType: a
                };
                if (i[n]) {
                    i[n].push(l);
                } else {
                    i[n] = [
                        l
                    ];
                }
            }
        },
        removeMarkerPoint: function(t, n) {
            const e = u.get(t);
            if (e) {
                delete e.markerPoints[n];
            }
        },
        setInteractionClass: function(t, n) {
            const e = u.get(t);
            if (e) {
                e.interactionClass = n;
            }
        },
        setInteractionType: function(t, n, r, o) {
            const e = u.get(t);
            if (e) {
                e.interactionClass = n;
                e.type = r;
                e.qplEvent = o;
            }
        },
        delete: function(t, n) {
            u.delete(t);
            if (n === true) {
                c.delete(t);
                s.delete(t);
            }
        },
        getInteractionStat: function() {
            return m;
        }
    };
    l.default = f;
}, 98);