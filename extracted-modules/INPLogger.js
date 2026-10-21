__d("INPLogger", [
    "CPUPressure",
    "DOMMutationTracker",
    "MemoryUtils",
    "OneTraceCore",
    "ReactStackUtils",
    "addAnnotations",
    "getIncrementalEventCount",
    "performanceNow",
    "stringHash",
    "uuidv4"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let s;
    const u = typeof window.PerformanceObserver?.supportedEntryTypes?.includes === "function" && window.PerformanceObserver.supportedEntryTypes.includes("event");
    const c = new Set;
    let d = false;
    let m = 1;
    const p = [
        "click",
        "keyup"
    ];
    let _ = new Set(p);
    function f() {
        return _;
    }
    function g(e) {
        if (!d) {
            if (e.INP.overrideDelayedEventTypeFilter != null) {
                _ = new Set(e.INP.overrideDelayedEventTypeFilter);
            }
            if (u) {
                if (e.INP.enableDOMMutationTracking === true) {
                    o("DOMMutationTracker").init(e);
                }
                const t = new window.PerformanceObserver(function(e) {
                    e.getEntries().forEach((e)=>{
                        if (_.has(e.name)) {
                            c.forEach((t)=>{
                                t(e);
                            });
                        }
                    });
                });
                h(function(t) {
                    const n = r("OneTraceCore").startTrace(r("uuidv4")(), r("OneTraceCore").getCurrentTracePolicy(), "INP", t.startTime, undefined, {
                        string: {
                            inputEventType: t.name
                        }
                    });
                    const usedJSHeapSize = o("MemoryUtils").getCurrentMemory().usedJSHeapSize;
                    const cumulativeTotalEvent = r("getIncrementalEventCount")(t.name, "INP");
                    r("addAnnotations")(n.annotations, {
                        int: {
                            cumulativeTotalEvent,
                            instanceNum: m++,
                            usedJSHeapSize
                        },
                        string: {
                            inputEventType: t.name,
                            recentInteractionIndentifier: r("OneTraceCore").getRecentInteractionIndentifier()
                        }
                    });
                    if (t.target != null) {
                        const l = t.target;
                        const targetElementStatus = l.isConnected === false ? "detached" : "attached";
                        r("addAnnotations")(n.annotations, {
                            string: {
                                targetElementStatus
                            }
                        });
                        if (e.INP.getReactComponentStackFromDOMElement != null && (e.INP.logReactStack || e.INP.logReactStackHash)) {
                            const c = e.INP.getReactComponentStackFromDOMElement;
                            const reactStack = o("ReactStackUtils").getTrimmedReactStack(l, "HeroPagelet", c);
                            if (reactStack != null) {
                                if (e.INP.logReactStackHash) {
                                    const reactStackHash = o("stringHash").stringArrayHash(reactStack);
                                    r("addAnnotations")(n.annotations, {
                                        string: {
                                            reactStackHash
                                        }
                                    });
                                }
                                if (e.INP.logReactStack) {
                                    r("addAnnotations")(n.annotations, {
                                        string_array: {
                                            reactStack
                                        }
                                    });
                                }
                            }
                            const _ = e.INP.getWrapperComponentPropValueFromDOMElement;
                            if (_) {
                                const f = _(l, "HeroPagelet", "name");
                                if (f != null) {
                                    r("addAnnotations")(n.annotations, {
                                        string: {
                                            pageletName: f
                                        }
                                    });
                                }
                            }
                        }
                    }
                    if (e.enableCPUPressureTracking === true && o("CPUPressure").canUseCPUPressureAPI) {
                        r("addAnnotations")(n.annotations, {
                            string: {
                                cpu_pressure: o("CPUPressure").getCurrentState()
                            }
                        });
                    }
                    if (e.INP.enableDOMMutationTracking === true) {
                        const g = (s || (s = r("performanceNow")))();
                        const hadDOMMutations = o("DOMMutationTracker").hasMutationsInTimeRange(t.processingStart, g);
                        r("addAnnotations")(n.annotations, {
                            bool: {
                                hadDOMMutations
                            }
                        });
                        const y = o("DOMMutationTracker").getMutationsInTimeRange(t.processingStart, g);
                        let addedNodes = 0;
                        let removedNodes = 0;
                        let hiddenElements = 0;
                        let unhiddenElements = 0;
                        y.forEach((e)=>{
                            addedNodes += e.addedNodesRefs.length;
                            removedNodes += e.removedNodesRefs.length;
                            hiddenElements += e.hiddenElementRefs.length;
                            unhiddenElements += e.unhiddenElementRefs.length;
                        });
                        r("addAnnotations")(n.annotations, {
                            int: {
                                addedNodes,
                                removedNodes,
                                hiddenElements,
                                unhiddenElements
                            }
                        });
                    }
                    n.markerPoints.processingStart = {
                        timeSinceStart: t.processingStart
                    };
                    n.markerPoints.processingEnd = {
                        timeSinceStart: t.processingEnd
                    };
                    e.INP.eventTimingCallback?.(t, n);
                    r("OneTraceCore").endTrace(n.traceID, t.startTime + t.duration, "SUCCESS");
                });
                t.observe({
                    buffered: true,
                    type: "event"
                });
            }
            d = true;
        }
    }
    function h(e) {
        if (u) {
            c.add(e);
            return function() {
                c.delete(e);
            };
        }
        return function() {};
    }
    l.canUseEventTimingAPI = u;
    l.getObservedEventTypes = f;
    l.init = g;
    l.subscribe = h;
}, 98);