__d("InteractionTracingCore", [
    "HeroTracingDebugTracing",
    "InstrumentationAnalyzer",
    "InteractionCloning",
    "InteractionTracingLogger",
    "InteractionTracingUserTimingUtils",
    "JSScheduler",
    "MemoryUtils",
    "NetworkStatusTracker",
    "Promise",
    "QPLEvent",
    "VisibilityState",
    "VisualCompletionAdapter",
    "WebAPIs",
    "addAnnotations",
    "asyncToGeneratorRuntime",
    "clearTimeout",
    "hero-tracing",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "one-trace",
    "performanceNow",
    "setTimeoutAcrossTransitions",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    let s;
    let u;
    let c;
    const d = "InteractionTracingLogging";
    const m = new Map;
    let p;
    let _ = null;
    let f = 0;
    const g = new Set;
    let h = 1;
    r("one-trace").subscribe("trace-end-before-logging", function(e) {
        if (e.traceType === "LONGTASK" || e.traceType === "INP" || e.traceType === "LONG_ANIMATION_FRAME") {
            const n = e.traceType;
            const a = e.endTime ?? (c || (c = r("performanceNow")))();
            m.forEach((t)=>{
                const i = t.getTrace();
                if (i && (o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(t.getTraceId(), n, n, Math.max(e.startTime, i.start), a, {}), i.type != null)) {
                    const c = i.type;
                    const d = i.tracePolicy ?? "";
                    const m = t.getQPLEventMarkerId();
                    const initiatedInteraction = `${c}(${m}:${d})`;
                    const _ = e.annotations.string_array?.affectedInteractions ?? [];
                    r("addAnnotations")(e.annotations, {
                        string_array: {
                            affectedInteractions: _.concat([
                                initiatedInteraction
                            ])
                        }
                    });
                    if (n === "INP" && e.startTime <= i.start) {
                        r("addAnnotations")(e.annotations, {
                            string: {
                                initiatedInteraction
                            }
                        });
                        e.markerPoints.interactionTraceStart = {
                            timeSinceStart: i.start
                        };
                    }
                }
            });
        }
    });
    function y(traceId, t, n, r, a) {
        const l = o("VisibilityState").getHiddenSpans(t, n);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHiddenTiming(traceId, l);
        if (l.length > 0) {
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(traceId, "backgrounded", "AppTiming", l[0].start);
        }
        if (r.annotations.int?.hidden === undefined) {
            a.addAnnotationInt("hidden", Number(o("VisibilityState").wasHidden(t, n)));
        }
    }
    function C(e, t) {
        const a = t.completed ?? (c || (c = r("performanceNow")))();
        const i = t.markerPoints.visuallyComplete ? t.markerPoints.visuallyComplete.timestamp : a;
        const l = [];
        let s = null;
        e.forEach((e)=>{
            if (!e.isOnline && s == null) {
                s = e.timestamp;
                if (s < i) {
                    t.wasOffline = true;
                }
            } else if (e.isOnline && s != null) {
                l.push({
                    end: e.timestamp,
                    start: s
                });
                s = null;
            }
        });
        if (s != null) {
            l.push({
                end: a,
                start: s
            });
        }
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addOfflineTiming(t.traceId, l);
    }
    function b(cfg, t, n) {
        if (n.interactionClass) {
            t.addAnnotation("interactionClass", n.interactionClass);
        }
        const n_start = n.start;
        const i = n.completed ?? (c || (c = r("performanceNow")))();
        y(n.traceId, n_start, i, n, t);
        t.addAnnotationInt("navStartOffset", n.start);
        if (cfg.getMetadata) {
            const l = cfg.getMetadata();
            Object.keys(l).forEach((e)=>{
                const n = l[e];
                if (typeof n === "string") {
                    t.addAnnotation(e, n);
                } else if (typeof n === "number") {
                    t.addAnnotationInt(e, n);
                }
            });
        }
        if (cfg.pkgCohort != null) {
            t.addAnnotation("pkg_cohort", cfg.pkgCohort);
        }
        if (cfg.clientRevision != null) {
            t.addAnnotation("clientRevision", String(cfg.clientRevision));
        }
        if (cfg.serverRevision != null) {
            t.addAnnotation("serverRevision", String(cfg.serverRevision));
        }
        if (cfg.pushPhase != null) {
            t.addAnnotation("pushPhase", cfg.pushPhase);
        }
    }
    function v(e) {
        const t = o("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(e.traceId);
        o("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroPendingPlaceholders(e.traceId, t);
        t.forEach((t)=>{
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(e.traceId, "pendingPlaceholder", [
                t.pageletStack[t.pageletStack.length - 1],
                t.description
            ].filter(Boolean).join(":"));
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e.traceId, t.description, "HeroTracing", t.startTime, e.completed ?? (c || (c = r("performanceNow")))(), {
                spanType: "IncompletePlaceholder",
                pageletStack: t.pageletStack ?? []
            });
        });
    }
    function S(e, t) {
        e.onBeforeComplete(function(e) {
            if (e) {
                if (t.annotations.int?.revisit != null) {
                    r("addAnnotations")(e.annotations, {
                        int: {
                            revisit: Number(t.annotations.int?.revisit)
                        }
                    });
                }
                if (t.qplEvent) {
                    e.qplMarkerId = (u || (u = o("QPLEvent"))).getMarkerId(t.qplEvent);
                }
            }
        });
    }
    function R(e) {
        const t = e.replace(/\d{4,}/, "");
        return t;
    }
    let L = 0;
    const E = new Map;
    var k = {
        checkRevisit: function(t) {
            if (t == null) {
                return false;
            }
            return g.has(t);
        },
        checkAndMarkRevisit: function(t) {
            const e = k.checkRevisit(t);
            if (t != null) {
                g.add(t);
            }
            return e;
        },
        clone: function(t, n, o) {
            return r("InteractionCloning").clone(t, n, o, h++);
        },
        getNextInstanceKey: function() {
            return h++;
        },
        onStartInteraction: function(t) {
            const e = L++;
            E.set(e, t);
            return function() {
                E.delete(e);
            };
        },
        startInteraction: function(t, n = function() {}) {
            const e = o("hero-tracing").HeroLogger.genHeroInteractionUUIDAndMarkStart(t.interactionID);
            return k.trace(t.cfg, t.deps, t.qplEvent, n, t.interactionClass, t.traceType, t.tracePolicy, e, t.startTime, t.eventQueueTime, t.debugName, t.skipQPLStartMarker, t.qplInstanceKey, t.VCConfigOverride, t.instanceIdentifier, t.namespace);
        },
        trace: ((e)=>{
            function t(t, n, r, o, a, i, l, s, u, c, d, m, p, _, f, g) {
                return e.apply(this, arguments);
            }
            t.toString = function() {
                return e.toString();
            };
            return t;
        })(function(cfg, deps, i, l, g, y, L, I = r("uuidv4")(), T, D = null, x, $, P, N, M, w) {
            const A = [];
            const F = _;
            const O = P ?? h++;
            let B = L != null ? R(L) : null;
            if (B != null) {
                deps.QuickPerformanceLogger.markerAnnotate(i, {
                    string: {
                        tracePolicy: B
                    }
                }, {
                    instanceKey: O
                });
            }
            if (y === "INITIAL_LOAD" || y === "NAVIGATION") {
                _ = B;
            }
            let W = M;
            const q = cfg.enableMemoryLogging ? o("MemoryUtils").getCurrentMemory().usedJSHeapSize : null;
            if (!p) {
                p = o("WebAPIs").onBeforeUnload(function() {
                    m.forEach((e)=>{
                        if (e.getTrace()?.annotations.int?.success_on_unload === 1) {
                            e.forceCompleteTrace();
                        } else {
                            e.cancelTrace("unload", true);
                        }
                    });
                    if (p) {
                        p.remove();
                    }
                    p = null;
                });
            }
            function U(e, t) {
                return V.apply(this, arguments);
            }
            function V() {
                V = n("asyncToGeneratorRuntime").asyncToGenerator(function*(t, r) {
                    if (J != null) {
                        if (se.length > 0) {
                            yield (e || (e = n("Promise"))).all(se);
                        }
                        deps.WebLoom?.endTraceForInteraction(t, r);
                    }
                });
                return V.apply(this, arguments);
            }
            const H = new Set([
                d
            ]);
            function G(e = false) {
                const t = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                if (!(!t || !m.has(I))) {
                    if (t.completed == null) {
                        t.completed = (c || (c = r("performanceNow")))();
                    }
                    v(t);
                    const n = [].concat(re);
                    re.length = 0;
                    n.forEach((e)=>{
                        e(t, true);
                    });
                    if (e) {
                        Q(t, true);
                    } else {
                        (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(function() {
                            Q(t, true);
                        });
                    }
                }
            }
            var z = {
                addJoinId: function(t) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addJoinId(I, t);
                },
                addGlobalMetadata: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addGlobalMetadata(I, t, n);
                },
                addLoomTraceEndDependency: function(t) {
                    se.push(t);
                },
                addMarkerPoint: function(t, n, a = (c || (c = r("performanceNow")))(), i) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(I, t, n, a, i);
                },
                addSubspan: function(t, n, r, a, i) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(I, t, n, r, a, i || {});
                },
                addMetadata: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(I, t, n);
                },
                addAnnotation: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(I, t, n);
                },
                addAnnotationInt: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(I, t, n);
                },
                addAnnotationDouble: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDouble(I, t, n);
                },
                addAnnotationBoolean: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBoolean(I, t, n);
                },
                addAnnotationStringArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationStringArray(I, t, n);
                },
                addAnnotationIntArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationIntArray(I, t, n);
                },
                addAnnotationDoubleArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDoubleArray(I, t, n);
                },
                addAnnotationBooleanArray: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBooleanArray(I, t, n);
                },
                addTag: function(t, n) {
                    o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(I, t, n);
                },
                lockInteractionLogging: function(t) {
                    H.add(t);
                },
                unlockInteractionLogging: function(t) {
                    if (H.has(t)) {
                        H.delete(t);
                        if (H.size === 0) {
                            j();
                        }
                    }
                },
                cancelTrace: function(t, n) {
                    z.addAnnotation("cancelType", t);
                    const e = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                    if (!(!e || !m.has(I))) {
                        e.wasCanceled = true;
                        G(n);
                    }
                },
                forceCompleteTrace: function() {
                    G(true);
                },
                getConfigAndDependencies: function() {
                    return {
                        cfg,
                        deps
                    };
                },
                getTrace: function() {
                    return o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                },
                getTraceId: function() {
                    return I;
                },
                getQPLEventMarkerId: function() {
                    return (u || (u = o("QPLEvent"))).getMarkerId(i);
                },
                markTraceAsSuccessOnUnload: function() {
                    z.addAnnotationInt("success_on_unload", 1);
                },
                observeMutation: function(n) {
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        o("VisualCompletionAdapter").observeMutation(I, n);
                    }
                },
                onComplete: function(t) {
                    ne.push(t);
                },
                onCompleteSync: function(t) {
                    re.push(t);
                },
                onLog: function(t) {
                    oe.push(t);
                },
                onMeasurementAnalysis: function(t) {
                    ae.push(t);
                },
                onBeforeLog: function(t) {
                    ie.push(t);
                },
                onVcMetricsComplete: function(t) {
                    le.push(t);
                },
                setTracePolicy: function(n) {
                    if (n != null) {
                        const e = R(n);
                        B = e;
                        if (y === "INITIAL_LOAD" || y === "NAVIGATION") {
                            _ = B;
                        }
                        z.addAnnotation("tracePolicy", B);
                        deps.QuickPerformanceLogger.markerAnnotate(i, {
                            string: {
                                tracePolicy: B
                            }
                        }, {
                            instanceKey: O
                        });
                        if (J == null && cfg.disableLoomTrace !== true) {
                            const s = deps.WebLoom?.maybeStartTraceForInteraction(I, g, i, B, T);
                            J = s?.traceReferenceId;
                            Z = s?.loomProviders;
                        }
                        const c = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(I);
                        if (c) {
                            c.tracePolicy = B;
                            if (c.vcTracker) {
                                c.vcTracker.setTracePolicy(B);
                            }
                        }
                        r("one-trace").setTracePolicy(I, y, e);
                        r("one-trace").annotateInteractionIndentifier(`${y}(${(u || (u = o("QPLEvent"))).getMarkerId(i)}:${e})`);
                    }
                },
                setInstanceIdentifier: function(t) {
                    W = t;
                },
                getInstanceKey: function() {
                    return O;
                },
                failTrace: function(t, n) {
                    z.addMetadata("isError", 1);
                    z.addMetadata("errorComponent", t);
                    if (n) {
                        z.forceCompleteTrace();
                    }
                }
            };
            var j = ()=>{
                if (m.has(I)) {
                    const e = pe;
                    r("clearTimeout")(ce);
                    Y.remove();
                    m.delete(I);
                    C(A, e);
                    const n = [].concat(ie);
                    ie.length = 0;
                    n.forEach((t)=>{
                        t(e);
                    });
                    const l = o("InteractionTracingLogger").getTraceStatus(e, cfg.qplActionCancelOnNavigation);
                    const s = o("InteractionTracingLogger").logQPL(cfg, deps, i, l, e, O);
                    e.qplAction = s;
                    e.traceStatus = l;
                    e.debugName = x;
                    if (cfg.heroBootloadStatsAfterQPL === false) {
                        deps.HeroBootloadPerfStore?.addStaticResourcesStats(e);
                    }
                    const c = [].concat(oe);
                    oe.length = 0;
                    c.forEach((n)=>{
                        n(e, o("InteractionTracingLogger").getTraceStatus(e, cfg.qplActionCancelOnNavigation));
                    });
                    if (cfg.heroBootloadStatsAfterQPL === true) {
                        deps.HeroBootloadPerfStore?.addStaticResourcesStats(e);
                    }
                    delete e.vcTracker;
                    U(e, s);
                    o("InteractionTracingUserTimingUtils").markInteraction(deps, e, y, cfg, O);
                    setTimeout(()=>{
                        o("interaction-tracing-metrics").InteractionTracingMetricsCore.delete(I, cfg.clearAllMapsOnCleanup);
                    }, cfg.cleanUpTraceTimeout);
                }
            };
            function K(e) {
                if (e) {
                    H.forEach((e)=>{
                        z.unlockInteractionLogging(e);
                    });
                } else {
                    z.unlockInteractionLogging(d);
                }
            }
            var Q = (n, r)=>{
                if (m.has(I)) {
                    z.addAnnotationInt("startTimestamp", T + cfg.qplBaseTimestamp);
                    z.addAnnotation("tracePolicy", B ?? cfg.defaultTracePolicy);
                    if (y === "INITIAL_LOAD" || y === "NAVIGATION") {
                        z.addAnnotationInt("revisit", Number(k.checkAndMarkRevisit(B)));
                        if (W != null) {
                            z.addAnnotationInt("instance_revisit", Number(k.checkAndMarkRevisit(W)));
                        }
                    }
                    if (F != null) {
                        z.addAnnotation("referrer", F);
                    }
                    z.addAnnotation("interactionId", I);
                    if (q != null) {
                        const e = o("MemoryUtils").getCurrentMemory();
                        const { deviceMemory, jsHeapSizeLimit, totalJSHeapSize, usedJSHeapSize } = e;
                        if (usedJSHeapSize != null) {
                            z.addAnnotationInt("usedJSHeapSizeStart", q);
                            z.addAnnotationInt("usedJSHeapSizeEnd", usedJSHeapSize);
                        }
                        if (totalJSHeapSize != null) {
                            z.addAnnotationInt("JSTotalHeapSize", totalJSHeapSize);
                        }
                        if (jsHeapSizeLimit != null) {
                            z.addAnnotationInt("JSHeapSizeLimit", jsHeapSizeLimit);
                        }
                        if (deviceMemory != null) {
                            z.addAnnotationInt("JSDeviceMemory", deviceMemory);
                        }
                    }
                    b(cfg, z, n);
                    if (deps.VCTracker && cfg.enableVCTracker && ue != null) {
                        ue();
                    }
                    const c = [].concat(ne);
                    ne.length = 0;
                    c.forEach((e)=>{
                        e(n, r);
                    });
                    if (J != null) {
                        z.addAnnotation("loomRefId", J);
                    }
                    if (Z != null) {
                        Z.forEach((e)=>z.addTag("loomProviders", e));
                    }
                    const d = n.vcTracker;
                    if (d && !n.hasVcReport) {
                        d.onComplete(function() {
                            K(r);
                        });
                        if (r) {
                            d.forceMeasurement();
                        }
                    } else {
                        K(r);
                    }
                }
            };
            function X(isOnline, t = (c || (c = r("performanceNow")))()) {
                A.push({
                    isOnline,
                    timestamp: t
                });
            }
            var Y = r("NetworkStatusTracker").onChange(function({ online }) {
                X(online);
            });
            if (!r("NetworkStatusTracker").isOnline()) {
                X(false);
            }
            var J;
            var Z;
            if (B != null && cfg.disableLoomTrace !== true) {
                const te = deps.WebLoom?.maybeStartTraceForInteraction(I, g, i, B, T);
                J = te?.traceReferenceId;
                Z = te?.loomProviders;
            }
            if ($ !== true) {
                o("InteractionTracingLogger").initQPL(cfg, deps, i, T, O);
            }
            var ne = [];
            var re = [];
            var oe = [];
            var ae = [];
            var ie = [];
            var le = [];
            var se = [];
            var ue = null;
            if (deps.VCTracker && cfg.enableVCTracker) {
                ue = o("VisualCompletionAdapter").markOtherInteractionSubspanToNavigationVC(deps.VCTracker, y, I, i);
            }
            r("one-trace").startTrace(I, B, y, T, i);
            if (B != null) {
                r("one-trace").annotateInteractionIndentifier(`${y}(${(u || (u = o("QPLEvent"))).getMarkerId(i)}:${B ?? ""})`);
            }
            z.onLog(function(e, n) {
                r("one-trace").annotateInteractionIndentifier(`${y}(${(u || (u = o("QPLEvent"))).getMarkerId(i)}:${B ?? ""})`);
                r("one-trace").endTrace(I, e.completed ?? (c || (c = r("performanceNow")))(), o("InteractionTracingLogger").getTraceStatus(e, cfg.qplActionCancelOnNavigation));
            });
            var ce = r("setTimeoutAcrossTransitions")(function() {
                z.cancelTrace("timeout", false);
            }, cfg.timeout);
            if (cfg.cancelOnBackground === true) {
                const de = o("VisibilityState").subscribe(function(e, t) {
                    if (t) {
                        z.cancelTrace("background", true);
                    }
                });
                z.onCompleteSync(function() {
                    de();
                });
            }
            const me = function(n, o = false) {
                let e;
                if (m.has(I)) {
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        if ((e = n.vcTracker) != null) {
                            e.unlock(deps.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
                        }
                    }
                    if (n.completed == null) {
                        n.completed = (c || (c = r("performanceNow")))();
                    }
                    const l = [].concat(re);
                    re.length = 0;
                    l.forEach((e)=>{
                        e(n);
                    });
                    if (n.type === "INITIAL_LOAD" && window?.document?.readyState === "loading") {
                        const d = function() {
                            (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(function() {
                                Q(n, o);
                            });
                            window?.document?.removeEventListener("DOMContentLoaded", d);
                        };
                        window?.document?.addEventListener("DOMContentLoaded", d);
                    } else {
                        (s || (s = r("JSScheduler"))).scheduleLoggingPriCallback(function() {
                            Q(n, o);
                        });
                    }
                }
            };
            var pe = o("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(I, T, me);
            o("interaction-tracing-metrics").InteractionTracingMetricsCore.setInteractionType(I, g, y, i);
            if (pe) {
                pe.namespace = w ?? "default";
            }
            switch(y){
                case "INITIAL_LOAD":
                    z.addAnnotationInt("navSequence", ++f);
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        const _e = o("VisualCompletionAdapter").traceNavigationVC(deps.VCTracker, I, 0, "INITIAL_LOAD", f, N, w);
                        if (pe) {
                            pe.vcTracker = _e;
                        }
                        if (cfg.useDocumentBodyForVCRoot === true && window.document != null) {
                            _e.observeMutation(window.document.body);
                            _e.registerNavigationMutationRoot(window.document.body);
                        }
                    }
                    break;
                case "NAVIGATION":
                    z.addAnnotationInt("navSequence", ++f);
                    m.forEach((e)=>{
                        const n = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e.getTraceId());
                        if (!(!cfg.navigationCancelsInteractions && n && n.type === "INTERACTION" || n != null && n.namespace != null && n.namespace !== (w ?? "default"))) {
                            e.cancelTrace("navigation", false);
                        }
                    });
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        const fe = o("VisualCompletionAdapter").traceNavigationVC(deps.VCTracker, I, T, y, f, N, w);
                        if (pe) {
                            pe.vcTracker = fe;
                        }
                        if (cfg.useDocumentBodyForVCRoot === true && window.document != null) {
                            fe.observeMutation(window.document.body);
                            fe.registerNavigationMutationRoot(window.document.body);
                        }
                    }
                    break;
                case "INTERACTION":
                    if (deps.VCTracker && cfg.enableVCTracker) {
                        const ge = o("VisualCompletionAdapter").traceInteractionVC(deps.VCTracker, I, T, y, N);
                        if (pe) {
                            pe.vcTracker = ge;
                        }
                    }
                    break;
            }
            m.set(z.getTraceId(), z);
            o("HeroTracingDebugTracing").addHeroDebugging(z, cfg, function() {
                return J != null;
            });
            z.onCompleteSync(function(e) {
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(e.traceId, "HeroTrace_end", "AppTiming", e.completed ?? (c || (c = r("performanceNow")))());
                o("hero-tracing").HeroLogger.cleanupHeroInteraction(e.traceId);
            });
            if (B != null) {
                z.setTracePolicy(B);
            }
            if (pe && pe.vcTracker) {
                const he = pe.vcTracker;
                if (deps.VCTracker && cfg.enableVCTracker) {
                    he.lock(deps.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
                }
                o("VisualCompletionAdapter").logFinalReactStackOnBeforeComplete(he, pe);
                S(he, pe);
                he.onComplete(function(e) {
                    const t = [].concat(le);
                    le.length = 0;
                    if (e) {
                        t.forEach((t)=>{
                            t(pe, e);
                        });
                    }
                });
                o("VisualCompletionAdapter").copyVcMetricsOnComplete(cfg, pe, z);
                if (cfg.setupVcTracker) {
                    cfg.setupVcTracker(he);
                }
            }
            l(z);
            E.forEach((e)=>e(z));
            if (D != null) {
                const ye = T;
                o("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(I, "EventQueued", "DOMEventTiming", ye, ye + D, {});
            }
            if (cfg.enableInstrumentationCorrectnessLogging && cfg.instrumentationCorrectnessQPLEvent != null) {
                const Re = cfg.instrumentationCorrectnessQPLEvent;
                const Le = pe.vcTracker?.config ?? {};
                const Ee = o("InstrumentationAnalyzer").createInstrumentationAnalyzerInstance(I, y, (u || (u = o("QPLEvent"))).getMarkerId(i), Re, deps.QuickPerformanceLogger, cfg.qplBaseTimestamp, B, Le.getReactComponentStackFromDOMElement ?? null, Le.getWrapperComponentPropArrayFromDOMElement ?? null);
                pe.measurementCorrectness = Ee.getTraceMetadata();
                z.onLog(function(e, t) {
                    Ee.endInteraction(e, t);
                    ae.forEach((e)=>{
                        Ee.onReport(e);
                    });
                    ae.length = 0;
                });
            }
            return I;
        }),
        getPendingInteractions: function() {
            return new Set(m.values());
        },
        getPendingInteractionById: function(t) {
            return m.get(t);
        }
    };
    l.default = k;
}, 98);