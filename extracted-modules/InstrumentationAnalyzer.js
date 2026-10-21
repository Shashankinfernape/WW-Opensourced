__d("InstrumentationAnalyzer", [
    "ReactStackUtils",
    "clearTimeout",
    "hero-tracing",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = 2000;
    let u = 0;
    function c() {
        return u++;
    }
    const d = Object.freeze({
        NONE: null,
        MISSING_TRACE_POLICY: "1",
        INCOMPLETE_HERO_TRACE: "2",
        MISSING_DOM_MUTATIONS: "3",
        UNKNOWN_CANCEL_REASON: "4",
        MISSING_CANCEL_DETAILS: "5",
        LATE_SIGNALS_AFTER_TRACE: "6",
        USER_INPUT_DETECTED: "10",
        TIMEOUT_BY_INCOMPLETE_LOADING_STATE: "11"
    });
    class m {
        constructor(t, n, o, a, i, l, s, u, m){
            this.$8 = [];
            this.$4 = l;
            this.$3 = c();
            this.$2 = i;
            this.$5 = a;
            this.$6 = u;
            this.$7 = m;
            this.$2.markerStart(a, this.$3, (e || (e = r("performanceNow")))() + this.$4, {
                cancelOnUnload: true,
                trackedForLoss: true
            });
            this.$1 = {
                errorCode: d.NONE,
                status: "STARTED",
                string: {
                    cancelType: "",
                    loomRefId: null,
                    traceStatus: "STARTED",
                    tracePolicy: null,
                    traceType: n,
                    traceId: t,
                    lastPendingStage: null,
                    traceQPLEvent: String(o)
                },
                string_array: {},
                int: {
                    heroEndToVCWithoutImage: null,
                    hidden: 0
                },
                bool: {
                    heroTraceStarted: false,
                    heroTraceEnded: false,
                    hadMutationRoot: false,
                    hadDOMMutation: false,
                    hadPaintedElement: false,
                    hadLoadingStateElement: false,
                    hadSuspendedPlaceholder: false,
                    hadLatePlaceholder: false,
                    hadLateDOMMutation: false,
                    cancelWithoutPendingPlaceholder: false,
                    noSignalUntilTimeout: false,
                    userInputDetectedAfterTrace: false
                }
            };
            if (s != null) {
                this.setStringMetadata("tracePolicy", s);
            }
            this.setStringMetadata("traceType", n);
            this.setStringMetadata("traceId", t);
            this.setStringMetadata("traceQPLEvent", String(o));
        }
        endInteraction(n, a) {
            const t = this;
            this.$2.markerPoint(this.$5, "traceEnd", {
                timestamp: (e || (e = r("performanceNow")))() + this.$4,
                instanceKey: this.$3
            });
            const n_vcTracker = n.vcTracker;
            if (a === "SUCCESS") {
                var l = n_vcTracker?.subscribeExtraMutation(function(i, s, d, m) {
                    t.$1.bool.hadLateDOMMutation = i != null;
                    t.setBooleanMetadata("userInputDetectedAfterTrace", s);
                    if (d != null) {
                        t.setIntMetadata("lateDOMMutationX", d.left);
                        t.setIntMetadata("lateDOMMutationY", d.top);
                        t.setIntMetadata("lateDOMMutationWidth", d.right - d.left);
                        t.setIntMetadata("lateDOMMutationHeight", d.bottom - d.top);
                    }
                    if (m != null) {
                        t.setStringMetadata("lateDOMMutationType", m);
                    }
                    if (i != null) {
                        if (t.$6) {
                            const p = o("ReactStackUtils").getTrimmedReactStack(i, "HeroPagelet", t.$6);
                            if (p != null) {
                                t.setStringArrayMetadata("lateDOMMutationReactStack", p);
                            }
                        }
                        if (t.$7) {
                            const _ = t.$7(i, "HeroPagelet", "name");
                            if (_ != null) {
                                t.setStringArrayMetadata("lateDOMMutationPageletStack", _);
                            }
                        }
                        t.$2.markerPoint(t.$5, "lateDOMMutation", {
                            timestamp: (e || (e = r("performanceNow")))() + t.$4,
                            instanceKey: t.$3
                        });
                    }
                    l?.();
                    if (s || t.$1.bool.hadLateDOMMutation && t.$1.bool.hadLatePlaceholder) {
                        r("clearTimeout")(c);
                        if (u != null) {
                            u();
                        }
                        t.finalizeReporting(n, a);
                    }
                });
                var u = o("hero-tracing").HeroLogger.subscribeToPlaceholders({
                    onStart: function(i) {
                        if (i.interactionID === n.traceId && i.contextualInteractionUUID === n.traceId) {
                            t.$1.bool.hadLatePlaceholder = true;
                            t.$2.markerPoint(t.$5, "latePlaceholder", {
                                timestamp: (e || (e = r("performanceNow")))() + t.$4,
                                instanceKey: t.$3
                            });
                            if (i.description != null) {
                                t.setStringMetadata("latePlaceholderName", i.description);
                            }
                            if (u != null) {
                                u();
                            }
                            if (t.$1.bool.hadLateDOMMutation && t.$1.bool.hadLatePlaceholder) {
                                r("clearTimeout")(c);
                                if (l != null) {
                                    l();
                                }
                                t.finalizeReporting(n, a);
                            }
                        }
                    },
                    onEnd: function() {}
                });
                var c = r("setTimeoutAcrossTransitions")(function() {
                    t.setBooleanMetadata("noSignalUntilTimeout", true);
                    l?.();
                    u?.();
                    t.finalizeReporting(n, a);
                }, s);
            } else {
                if (n.tagSet.pendingPlaceholder == null) {
                    this.setBooleanMetadata("cancelWithoutPendingPlaceholder", true);
                    if (n.annotations.int?.incompleteLoadingElementsCount != null && n.annotations.int.incompleteLoadingElementsCount > 0) {
                        this.setStringMetadata("lastPendingStage", "loadingStateElement");
                    } else if (n.annotations.int?.incompleteImageCount != null && n.annotations.int.incompleteImageCount > 0) {
                        this.setStringMetadata("lastPendingStage", "imageLoad");
                    } else if (n.annotations.int?.incompleteLockCount != null && n.annotations.int.incompleteLockCount > 0) {
                        this.setStringMetadata("lastPendingStage", "incompleteLocks");
                    }
                } else {
                    this.setStringMetadata("lastPendingStage", "placeholder");
                }
                this.finalizeReporting(n, a);
            }
        }
        getTraceMetadata() {
            return this.$1;
        }
        setBooleanMetadata(t, n) {
            this.$1.bool[t] = n;
            this.$2.markerAnnotate(this.$5, {
                bool: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        setStringMetadata(t, n) {
            this.$1.string[t] = n;
            this.$2.markerAnnotate(this.$5, {
                string: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        setStringArrayMetadata(t, n) {
            this.$1.string_array[t] = n;
            this.$2.markerAnnotate(this.$5, {
                string_array: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        setIntMetadata(t, n) {
            this.$1.int[t] = n;
            this.$2.markerAnnotate(this.$5, {
                int: {
                    [t]: n
                }
            }, {
                instanceKey: this.$3
            });
        }
        evaluateTraceCorrectness() {
            const e = {
                SUCCESS: 2,
                FAIL: 3,
                UNKNOWN: 51,
                STARTED: 51
            };
            this.$1.status = "SUCCESS";
            if (this.$1.string.tracePolicy == null) {
                this.$1.errorCode = d.MISSING_TRACE_POLICY;
                this.$1.status = "FAIL";
            }
            if (!this.$1.bool.heroTraceStarted || !this.$1.bool.heroTraceEnded) {
                this.$1.errorCode = d.INCOMPLETE_HERO_TRACE;
                this.$1.status = "FAIL";
            }
            if (!this.$1.bool.hadMutationRoot || !this.$1.bool.hadPaintedElement || !this.$1.bool.hadDOMMutation) {
                this.$1.errorCode = d.MISSING_DOM_MUTATIONS;
                this.$1.status = "FAIL";
            }
            if ((this.$1.string.traceStatus === "TIMEOUT" || this.$1.string.traceStatus.startsWith("CANCEL")) && !this.$1.string.cancelType) {
                this.$1.errorCode = d.UNKNOWN_CANCEL_REASON;
                this.$1.status = "FAIL";
            }
            if ((this.$1.string.traceStatus === "TIMEOUT" || this.$1.string.traceStatus.startsWith("CANCEL")) && this.$1.string.lastPendingStage == null) {
                this.$1.errorCode = d.MISSING_CANCEL_DETAILS;
                this.$1.status = "FAIL";
            }
            if (this.$1.string.traceStatus === "SUCCESS" && this.$1.bool.noSignalUntilTimeout && (this.$1.bool.hadLateDOMMutation || this.$1.bool.hadLatePlaceholder)) {
                this.$1.errorCode = d.LATE_SIGNALS_AFTER_TRACE;
                this.$1.status = "FAIL";
            }
            if (this.$1.bool.userInputDetectedAfterTrace === true) {
                this.$1.errorCode = d.USER_INPUT_DETECTED;
                this.$1.status = "UNKNOWN";
            }
            if (this.$1.string.traceStatus === "TIMEOUT" && this.$1.string.lastPendingStage === "loadingStateElement") {
                this.$1.errorCode = d.TIMEOUT_BY_INCOMPLETE_LOADING_STATE;
                this.$1.status = "FAIL";
            }
            return e[this.$1.status];
        }
        onReport(t) {
            this.$8.push(t);
        }
        finalizeReporting(n, o) {
            this.setStringMetadata("traceStatus", o);
            if (n.annotations.string?.tracePolicy != null) {
                this.setStringMetadata("tracePolicy", n.annotations.string.tracePolicy);
            }
            this.setBooleanMetadata("hadLatePlaceholder", this.$1.bool.hadLatePlaceholder);
            this.setIntMetadata("hidden", n.annotations.int?.hidden ?? 0);
            if (n.annotations.string?.loomRefId != null) {
                this.setStringMetadata("loomRefId", n.annotations.string.loomRefId);
            }
            this.setBooleanMetadata("hadLateDOMMutation", this.$1.bool.hadLateDOMMutation);
            this.setBooleanMetadata("hadLoadingStateElement", n.markerPoints.loadingState_start != null);
            this.setBooleanMetadata("heroTraceStarted", n.markerPoints.HeroTrace_start != null);
            this.setBooleanMetadata("heroTraceEnded", n.markerPoints.HeroTrace_end != null);
            if (n.markerPoints.HeroTrace_end != null && n.markerPoints.vcWithoutImage != null) {
                const m = n.markerPoints.HeroTrace_end.timestamp;
                const p = n.markerPoints.vcWithoutImage.timestamp;
                this.setIntMetadata("heroEndToVCWithoutImage", Math.round(p - m));
            }
            if (n.markerPoints.HeroTrace_end != null) {
                this.$2.markerPoint(this.$5, "HeroTrace_end", {
                    timestamp: n.markerPoints.HeroTrace_end.timestamp + this.$4,
                    instanceKey: this.$3
                });
            }
            if (n.markerPoints.vcWithoutImage != null) {
                this.$2.markerPoint(this.$5, "vcWithoutImage", {
                    timestamp: n.markerPoints.vcWithoutImage.timestamp + this.$4,
                    instanceKey: this.$3
                });
            }
            this.setBooleanMetadata("hadMutationRoot", n.annotations.int?.mutationRootCount != null ? n.annotations.int.mutationRootCount > 0 : false);
            this.setBooleanMetadata("hadPaintedElement", n.annotations.int?.paintedElementCount != null ? n.annotations.int.paintedElementCount > 0 : false);
            this.setBooleanMetadata("hadDOMMutation", n.annotations.int?.mutatedElementCount != null ? n.annotations.int.mutatedElementCount > 0 : false);
            if (n.annotations.string?.cancelType != null) {
                this.setStringMetadata("cancelType", n.annotations.string.cancelType);
            }
            let _ = false;
            for(const f in n.subSpans){
                if (f.startsWith("Placeholder Wait:")) {
                    _ = true;
                }
            }
            this.setBooleanMetadata("hadSuspendedPlaceholder", _);
            const g = this.evaluateTraceCorrectness();
            this.$2.markerEnd(this.$5, g, this.$3, (e || (e = r("performanceNow")))() + this.$4);
            const h = [].concat(this.$8);
            this.$8 = [];
            h.forEach((e)=>{
                e(n);
            });
        }
    }
    function p(e, t, n, r, o, a, i, l, s) {
        return new m(e, t, n, r, o, a, i, l, s);
    }
    l.MeasurementErrorCode = d;
    l.InstrumentationAnalyzer = m;
    l.createInstrumentationAnalyzerInstance = p;
}, 98);