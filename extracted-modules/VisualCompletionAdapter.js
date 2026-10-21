__d("VisualCompletionAdapter", [
    "QPLEvent",
    "ReactStackUtils",
    "WebAPIs",
    "addAnnotations",
    "getVisualCompletionDefaultConfig",
    "hero-tracing-placeholder",
    "interaction-tracing-metrics",
    "performanceNow"
], function(t, n, r, o, a, i, l) {
    let e;
    let s;
    const u = "default";
    const c = new Map;
    const d = 4;
    const m = 2048;
    const p = "[truncated]";
    function _(e) {
        const t = new Set;
        e.slice().sort((e, t)=>t.endTime - e.endTime).forEach(({ description })=>{
            t.add(description);
        });
        for(var n = Array.from(t), r = JSON.stringify(p).length + 1, o = [], a = 2, i = 0; i < n.length; i++){
            const l = JSON.stringify(n[i]).length + (o.length > 0 ? 1 : 0);
            const s = i < n.length - 1 ? r : 0;
            if (a + l + s > m) {
                o.push(p);
                break;
            }
            o.push(n[i]);
            a += l;
        }
        return o;
    }
    function f(e, t, n) {
        for(const r in e){
            e[r].forEach((e)=>{
                const placeholderUUID = e.data.placeholderUUID;
                if (e.data.spanType === "PlaceholderWait" && typeof placeholderUUID === "string" && t.has(placeholderUUID) && e.start <= n) {
                    e.data.vcBlocking = true;
                }
            });
        }
    }
    function g(e, t) {
        const r = o("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e);
        r?.vcTracker?.observeMutation(t);
    }
    function h(t, n, interactionId, i) {
        const l = new Map;
        t.forEachNavigationVCTrace(function(t, u) {
            let p = c.get(u);
            if (p == null) {
                p = new Map;
                c.set(u, p);
            }
            const _ = (p.get(n) ?? 0) + 1;
            p.set(n, _);
            if (!(_ >= d)) {
                l.set(t.traceID, _);
                t.addMarkerPoint(`${n}_${_}_start`, (s || (s = r("performanceNow")))(), {
                    interactionId,
                    qplEvent: (e || (e = o("QPLEvent"))).getMarkerId(i)
                });
            }
        });
        if (l.size === 0) {
            return function() {};
        }
        return function() {
            t.forEachNavigationVCTrace(function(e, t) {
                const o = l.get(e.traceID);
                if (o != null) {
                    e.addMarkerPoint(`${n}_${o}_end`, (s || (s = r("performanceNow")))());
                }
            });
        };
    }
    function y(e, t, n, o, a, i, l) {
        const s = r("getVisualCompletionDefaultConfig")();
        if (i != null) {
            Object.assign(s, i);
        }
        const d = new e.VisualCompletionTracing(n, a, t, o, s, l);
        d.onComplete(function(t) {
            e.setLastNavigationVCReport(t, l);
        });
        e.setLastNavigationVCReport(null, l);
        e.setCurrentNavigationVCTrace(d, l);
        c.delete(l ?? u);
        return d;
    }
    function C(e, t, n, o, a) {
        const i = r("getVisualCompletionDefaultConfig")();
        if (a != null) {
            Object.assign(i, a);
        }
        return new e.VisualCompletionTracing(n, 0, t, o, i);
    }
    function b(e, t, n) {
        const t_vcTracker = t.vcTracker;
        t_vcTracker?.onComplete(function(e) {
            if (e) {
                t.vcStateLog = e.stateLog;
                const o = [];
                t_vcTracker.visualChangeRecordList.forEach(({ record })=>{
                    o.push(record);
                });
                t.vcMutationLog = o;
                t.hasVcReport = true;
                for(const a in e.annotations){
                    for(const i in e.annotations[a]){
                        t.annotations[a][i] = e.annotations[a][i];
                    }
                }
                e.markerPoints.forEach(({ data, timestamp }, n)=>{
                    t.markerPoints[n] = {
                        data,
                        timestamp,
                        type: "VisualCompletion"
                    };
                });
                e.tagSet.forEach((e, t)=>{
                    e.forEach((e)=>{
                        n.addTag(t, e);
                    });
                });
            }
        });
    }
    function v(e, t) {
        const i = e.config?.getReactComponentStackFromDOMElement;
        const l = e.config?.getWrapperComponentPropArrayFromDOMElement;
        if (i && e.config.logVCReactStack) {
            e.onBeforeComplete(function(e, n) {
                if (e) {
                    if (t.annotations.string?.cancelType != null && n.size() > 0) {
                        const l = Array.from(n.keys())[0];
                        const s = o("ReactStackUtils").getTrimmedReactStack(l, "HeroPagelet", i);
                        if (s != null) {
                            r("addAnnotations")(e.annotations, {
                                string: {
                                    incompleteLoadingElementReactStack: s.join(",")
                                }
                            });
                        }
                    }
                    [
                        "vcWithoutImage",
                        "visuallyComplete"
                    ].forEach((t)=>{
                        const n = e.markerPoints.get(t);
                        const r = o("WebAPIs").derefOnlyAttachedElement(n?.element);
                        if (n && r) {
                            const a = o("ReactStackUtils").getTrimmedReactStack(r, "HeroPagelet", i);
                            if (a != null) {
                                const l = n.data || {};
                                l.reactStack = a;
                                n.data = l;
                            }
                        }
                    });
                }
            });
        }
        if (l) {
            e.onBeforeComplete(function(n) {
                if (n) {
                    const r = n.markerPoints.get("visuallyComplete");
                    const a = o("WebAPIs").derefOnlyAttachedElement(r?.element);
                    if (r && a) {
                        const i = l(a, "HeroPlaceholder", "placeholderUUID");
                        const s = e.config.logHeroHoldTrigger ? l(a, "HeroHoldBoundary", "placeholderUUID").concat(l(a, "HeroHoldLoggingBoundary", "placeholderUUID")) : [];
                        const u = new Map;
                        i.forEach((e)=>{
                            if (e != null) {
                                u.set(e, false);
                            }
                        });
                        s.forEach((e)=>{
                            if (e != null) {
                                u.set(e, true);
                            }
                        });
                        const c = [];
                        const d = new Set;
                        const m = new Set;
                        u.forEach((e, n)=>{
                            let a = [
                                n
                            ];
                            let i = "";
                            if (e) {
                                a = o("hero-tracing-placeholder").HeroHoldLoggingBoundaryRegistry.getHoldIDs(n).filter((e)=>!m.has(e));
                                a.forEach((e)=>m.add(e));
                                const l = o("hero-tracing-placeholder").HeroHoldLoggingBoundaryRegistry.getBoundaryName(n);
                                i = l != null ? `@${l}` : "";
                            }
                            a.forEach((n)=>{
                                t.placeholderMap[n]?.forEach(function(t) {
                                    if (t.startTime <= r.timestamp && t.description != null) {
                                        c.push({
                                            description: e ? `HeroHold(${t.description}${i})` : t.description,
                                            endTime: t.endTime ?? Infinity
                                        });
                                        d.add(n);
                                    }
                                });
                            });
                        });
                        f(t.subSpans, d, r.timestamp);
                        const p = _(c);
                        if (p.length > 0) {
                            const g = r.data || {};
                            g.vcBlockingPlaceholders = p;
                            r.data = g;
                        }
                    }
                }
            });
        }
    }
    l.getVCBlockingPlaceholders = _;
    l.markVCBlockingSubspans = f;
    l.observeMutation = g;
    l.markOtherInteractionSubspanToNavigationVC = h;
    l.traceNavigationVC = y;
    l.traceInteractionVC = C;
    l.copyVcMetricsOnComplete = b;
    l.logFinalReactStackOnBeforeComplete = v;
}, 98);