__d("VisualCompletionTracing", [
    "IteratableElementWeakMap",
    "IteratableElementWeakSet",
    "LoadingStateTracker",
    "ResourceTimingAPI",
    "VisibilityAPI",
    "VisibilityState",
    "VisualCompletionLogger",
    "VisualCompletionTraceObserver",
    "VisualCompletionUtil",
    "VisualCompletionUtilCommon",
    "WebAPIs",
    "addAnnotations",
    "currentVCTraces",
    "foregroundRequestAnimationFrame",
    "performanceNow",
    "setTimeoutAcrossTransitions"
], function(t, n, r, o, a, i, l) {
    "use strict";
    let e;
    const s = new (r("IteratableElementWeakSet"));
    let u = false;
    if (!u && o("VisibilityAPI").canUseVisibilityAPI) {
        u = true;
        o("VisibilityState").subscribe(function(e, t) {
            if (t) {
                o("currentVCTraces").getCurrentVCTraces().forEach((e)=>{
                    e.pendingMutations.forEach((t, n)=>{
                        e.addVisualElement(t.mutationSeq, n, t.mutationType, t.mutationTimestamp, t.mutationTimestamp, undefined, undefined, t.imgLoadStart, t.imgLoadEnd);
                        if (e.intersectionObserver) {
                            e.intersectionObserver.unobserve(n);
                        }
                        e.unlock(t.lockId);
                    });
                    e.pendingMutations.clear();
                });
            }
        });
    }
    const c = ((t)=>{
        function n(n, a, i, l, u, c) {
            let d;
            d = t.call(this, n, a, i, l, u) || this;
            d.pendingLocks = new Map;
            d.pendingImages = new (r("IteratableElementWeakMap"));
            d.$VisualCompletionTracing$p_1 = null;
            d.$VisualCompletionTracing$p_2 = 0;
            d.$VisualCompletionTracing$p_3 = 0;
            d.$VisualCompletionTracing$p_5 = [];
            d.$VisualCompletionTracing$p_6 = [];
            d.mutationSeq = 0;
            d.mutationObserver = null;
            d.intersectionObserver = null;
            d.pendingMutations = new Map;
            d.namespace = "default";
            d.loggingScheduled = false;
            d.$VisualCompletionTracing$p_7 = new (r("IteratableElementWeakMap"));
            d.$VisualCompletionTracing$p_8 = null;
            d.intersectionObserverCallback = function(e) {
                Array.prototype.forEach.call(e, function(e) {
                    const t = d.pendingMutations.get(e.target);
                    if (t) {
                        let n = e.time;
                        if (e.time < t.mutationTimestamp) {
                            d.addAnnotationBoolean("pastPaintTimeReported", true);
                            n = t.mutationTimestamp;
                        }
                        d.addVisualElement(t.mutationSeq, e.target, t.mutationType, t.mutationTimestamp, n, o("WebAPIs").intersectionObserverEntryIsVisible(e), o("VisualCompletionUtilCommon").castToRect(e.boundingClientRect), t.imgLoadStart, t.imgLoadEnd);
                        if (o("WebAPIs").intersectionObserverEntryIsVisible(e)) {
                            d.addFirstMarkerPoint("firstPaint", e.time, {
                                mutationType: t.mutationType
                            });
                            if (d.$VisualCompletionTracing$p_8 != null) {
                                d.$VisualCompletionTracing$p_8(e.target, false, o("VisualCompletionUtilCommon").castToRect(e.boundingClientRect), t.mutationType);
                            }
                        }
                        d.cleanupPendingMutation(e.target);
                    }
                });
            };
            d.mutationRecordHandler = function(t) {
                d.mutationSeq++;
                const n = (e || (e = r("performanceNow")))();
                const a = o("VisualCompletionUtil").extractMutationElements(t, n, d);
                d.trackElements(a, d.mutationSeq, n);
                d.mutationProcessingOverhead += e() - n;
            };
            d.elementVisibilityCallback = function(e) {
                Array.from(e).forEach((e)=>{
                    if (o("WebAPIs").intersectionObserverEntryIsVisible(e)) {
                        const t = e.target;
                        const n = d.$VisualCompletionTracing$p_7.get(t);
                        if (n != null) {
                            n.callback();
                            if (n.executeOnce) {
                                d.$VisualCompletionTracing$p_7.delete(t);
                            }
                        }
                    }
                });
            };
            d.namespace = c ?? "default";
            d.$VisualCompletionTracing$p_4 = new (r("LoadingStateTracker"))(d);
            if (o("WebAPIs").MutationObserver) {
                d.mutationObserver = new (o("WebAPIs")).MutationObserver(d.mutationRecordHandler);
            }
            if (o("WebAPIs").IntersectionObserver) {
                d.intersectionObserver = new (o("WebAPIs")).IntersectionObserver(d.intersectionObserverCallback);
                d.$VisualCompletionTracing$p_1 = new (o("WebAPIs")).IntersectionObserver(d.elementVisibilityCallback);
            }
            o("currentVCTraces").addVCTrace(i, d);
            if (l === "INTERACTION") {
                d.measureOriginalViewport = false;
            } else {
                o("currentVCTraces").setCurrentNavigationVCTrace(d, d.namespace);
                d.measureOriginalViewport = true;
                if (u.measureOriginalViewportOnNavigation != null) {
                    d.measureOriginalViewport = u.measureOriginalViewportOnNavigation;
                }
                s.forEach((e)=>{
                    d.observeMutation(e);
                });
            }
            o("VisualCompletionUtil").setupScrollHandler(d);
            d.$VisualCompletionTracing$p_4.initBackgroundPolling();
            return d;
        }
        babelHelpers.inheritsLoose(n, t);
        const n_prototype = n.prototype;
        n_prototype.addLateMutationIgnoreElement = function(t) {
            this.lateMutationIgnoreElements.add(t);
        };
        n_prototype.addMutationRoot = function(n) {
            if (this.reported || this.checkDuplicatedMutationRoot(n)) {
                return function() {};
            }
            this.mutationSeq++;
            this.trackElements([
                [
                    n,
                    "mutationRoot"
                ]
            ], this.mutationSeq, (e || (e = r("performanceNow")))());
            return this.observeMutation(n);
        };
        n_prototype.dumpLocks = function() {
            return [
                this.pendingLocks,
                this.$VisualCompletionTracing$p_4.pendingLoadingElements,
                this.pendingImages
            ];
        };
        n_prototype.lock = function(n) {
            const t = this;
            this.pendingLocks.set(n, (e || (e = r("performanceNow")))());
            return function() {
                t.unlock(n);
            };
        };
        n_prototype.imageDone = function(n) {
            const t = this.pendingImages.get(n);
            if (t != null) {
                this.stateLog.set(`imgLoad_${this.$VisualCompletionTracing$p_3++}`, [
                    t,
                    (e || (e = r("performanceNow")))()
                ]);
                this.pendingImages.delete(n);
                this.attemptMeasurement();
            }
        };
        n_prototype.imageWait = function(n) {
            if (!this.reported) {
                this.pendingImages.set(n, (e || (e = r("performanceNow")))());
            }
        };
        n_prototype.cleanupPendingMutation = function(t, n) {
            const e = this.pendingMutations.get(t);
            if (e) {
                if (this.intersectionObserver != null) {
                    this.intersectionObserver.unobserve(t);
                }
                this.unlock(e.lockId, n);
                this.pendingMutations.delete(t);
            }
        };
        n_prototype.trackImage = function(t, n, r, a) {
            o("VisualCompletionUtil").trackImage(t, n, r, a, this);
        };
        n_prototype.waitLoadingState = function(t) {
            return this.$VisualCompletionTracing$p_4.waitLoadingState(t);
        };
        n_prototype.attemptMeasurementFromLoadingStateTracker = function() {
            this.attemptMeasurement();
        };
        n_prototype.getPendingLoadingElements = function() {
            return this.$VisualCompletionTracing$p_4.pendingLoadingElements;
        };
        n_prototype.unlock = function(n, o) {
            const t = this.pendingLocks.get(n);
            if (t != null) {
                this.pendingLocks.delete(n);
                const a = o != null ? `${o}_${n}` : n;
                this.stateLog.set(`Lock(${a})`, [
                    t,
                    (e || (e = r("performanceNow")))()
                ]);
                this.attemptMeasurement();
            }
        };
        n_prototype.checkDuplicatedMutationRoot = function(t) {
            for(let e = t; e != null;){
                if (this.mutationRoots.has(e)) {
                    return true;
                }
                e = e.parentElement;
            }
            return false;
        };
        n_prototype.observeMutation = function(t) {
            const e = this;
            if (this.reported || this.checkDuplicatedMutationRoot(t)) {
                return function() {};
            }
            if (o("VisualCompletionUtil").isElementNode(t) && this.mutationObserver) {
                this.mutationObserver.observe(t, o("VisualCompletionUtil").mutationObserverConfig);
            }
            this.mutationRoots.add(t);
            return function() {
                e.mutationRoots.delete(t);
            };
        };
        n_prototype.registerNavigationMutationRoot = function(t) {
            if (this.reported || this.checkDuplicatedMutationRoot(t)) {
                return function() {};
            }
            s.add(t);
            return function() {
                s.delete(t);
            };
        };
        n_prototype.scheduleIntersectionObserver = function(mutationSeq, a, i, mutationTimestamp, imgLoadStart, imgLoadEnd) {
            const t = this;
            if (!(this.reported && this.$VisualCompletionTracing$p_8 == null) && !this.$VisualCompletionTracing$p_4.hasLoadingStateUnmountCallback(a) && !(this.config.bypass_detached_element && a.isConnected === false)) {
                this.mutatedElementCount++;
                if (o("VisibilityAPI").canUseVisibilityAPI && o("VisibilityAPI").isVisibilityHidden()) {
                    this.addVisualElement(mutationSeq, a, i, mutationTimestamp, mutationTimestamp, undefined, undefined, imgLoadStart, imgLoadEnd);
                } else if (o("WebAPIs").IntersectionObserver) {
                    this.cleanupPendingMutation(a);
                    const lockId = `${i}_paint_${this.$VisualCompletionTracing$p_3++}`;
                    if (this.intersectionObserver) {
                        this.intersectionObserver.observe(a);
                    }
                    this.lock(lockId);
                    this.pendingMutations.set(a, {
                        mutationTimestamp,
                        lockId,
                        mutationType: i,
                        mutationSeq,
                        imgLoadStart,
                        imgLoadEnd
                    });
                    if (this.config.intersection_observer_timeout != null) {
                        r("setTimeoutAcrossTransitions")(function() {
                            const o = t.pendingMutations.get(a);
                            if (o != null && o.lockId === lockId) {
                                if (a.isConnected !== false) {
                                    t.addVisualElement(mutationSeq, a, "mutationTimeout", mutationTimestamp, (e || (e = r("performanceNow")))(), undefined, undefined, imgLoadStart, imgLoadEnd);
                                }
                                t.addAnnotationInt("intersection_observer_timeout_count", ++t.$VisualCompletionTracing$p_2);
                                t.cleanupPendingMutation(a, "timeout");
                            }
                        }, this.config.intersection_observer_timeout);
                    }
                } else {
                    const d = `${i}_paint_${this.$VisualCompletionTracing$p_3++}`;
                    this.lock(d);
                    o("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(function() {
                        t.addVisualElement(mutationSeq, a, i, mutationTimestamp, (e || (e = r("performanceNow")))(), undefined, undefined, imgLoadStart, imgLoadEnd);
                        t.unlock(d);
                    });
                }
            }
        };
        n_prototype.scheduleElementVisibleObserver = function(t, callback, { cleanAfterReport = true, executeOnce = true }) {
            if (!this.reported) {
                if (o("WebAPIs").IntersectionObserver) {
                    const s = this.$VisualCompletionTracing$p_7.get(t);
                    if (s && this.$VisualCompletionTracing$p_1) {
                        this.$VisualCompletionTracing$p_1.unobserve(t);
                    }
                    this.$VisualCompletionTracing$p_7.set(t, {
                        executeOnce,
                        callback,
                        cleanAfterReport
                    });
                    if (this.$VisualCompletionTracing$p_1) {
                        this.$VisualCompletionTracing$p_1.observe(t);
                    }
                } else {
                    return;
                }
            }
        };
        n_prototype.trackElements = function(t, n, r) {
            const e = this;
            if (!(this.reported && this.$VisualCompletionTracing$p_8 == null)) {
                const a = [];
                t.forEach((e)=>{
                    const t = e[0];
                    if (o("VisualCompletionUtil").isElementNode(t) && !o("VisualCompletionUtil").isImageOrPicture(t)) {
                        a.push(e);
                    }
                });
                a.forEach(([a, i])=>{
                    o("VisualCompletionUtil").checkLoadingStates(a, e);
                    e.scheduleIntersectionObserver(n, a, i, r);
                });
                if (this.interactionType === "INTERACTION" && this.config.allow_inclusion_in_navigation_vc !== true) {
                    o("currentVCTraces").forEachNavigationVCTrace(function(e, n) {
                        if (!e.reported) {
                            t.forEach(([n])=>{
                                e.excludeElement(n);
                            });
                        }
                    });
                }
            }
        };
        n_prototype.onBeforeComplete = function(t) {
            if (!this.reported) {
                this.$VisualCompletionTracing$p_5.push(t);
            }
        };
        n_prototype.onComplete = function(t) {
            if (!this.reported) {
                this.$VisualCompletionTracing$p_6.push(t);
            }
        };
        n_prototype.attemptMeasurement = function(t = false) {
            const e = this;
            if (!(!t && (this.loggingScheduled || this.reported || this.pendingLocks.size > 0 || this.$VisualCompletionTracing$p_4.pendingLoadingElements.size() > 0 || this.pendingImages.size() > 0))) {
                this.loggingScheduled = true;
                const n = function() {
                    if (!e.config.enableInstrumentationCorrectnessLogging) {
                        if (e.mutationObserver) {
                            e.mutationObserver.disconnect();
                        }
                        if (e.intersectionObserver) {
                            e.intersectionObserver.disconnect();
                        }
                    }
                    e.$VisualCompletionTracing$p_4.forEachLoadingStateUnmountCallback(function(e) {
                        e();
                    });
                    e.$VisualCompletionTracing$p_4.disconnect();
                    e.$VisualCompletionTracing$p_4.clearLoadingStateUnmountCallbacks();
                    e.$VisualCompletionTracing$p_4.disconnectTailLoadLoadingStateObservers();
                    o("currentVCTraces").removeVCTrace(e.traceID);
                    e.pendingMutations.clear();
                    if (!t && o("ResourceTimingAPI").canUseResourceTimingAPI() && e.config.check_css_bg_elements) {
                        o("VisualCompletionUtil").scanCssBgElements(e);
                    }
                    const n = e.calculate(t);
                    e.$VisualCompletionTracing$p_5.forEach((t)=>{
                        t(n, e.$VisualCompletionTracing$p_4.pendingLoadingElements);
                    });
                    e.$VisualCompletionTracing$p_5 = [];
                    r("VisualCompletionTraceObserver").emit(n);
                    e.$VisualCompletionTracing$p_6.forEach((e)=>{
                        e(n);
                    });
                    e.$VisualCompletionTracing$p_6 = [];
                    if (e.$VisualCompletionTracing$p_1) {
                        e.$VisualCompletionTracing$p_1.disconnect();
                    }
                    e.$VisualCompletionTracing$p_7.clear();
                    e.tearDown();
                };
                const a = this.config.defer_expensive_calculation;
                if (a != null && !t) {
                    a(n);
                } else {
                    n();
                }
            }
        };
        n_prototype.forceMeasurement = function() {
            const t = this;
            if (!this.reported) {
                if (this.pendingLocks.size > 0) {
                    r("addAnnotations")(this.annotations, {
                        int: {
                            incompleteLockCount: this.pendingLocks.size
                        }
                    });
                    this.pendingLocks.forEach((n, o)=>{
                        t.addTag("incompleteLocks", o);
                        t.stateLog.set(`incomplete_${o}`, [
                            n,
                            (e || (e = r("performanceNow")))()
                        ]);
                    });
                }
                if (this.$VisualCompletionTracing$p_4.pendingLoadingElements.size() > 0) {
                    r("addAnnotations")(this.annotations, {
                        int: {
                            incompleteLoadingElementsCount: this.$VisualCompletionTracing$p_4.pendingLoadingElements.size()
                        }
                    });
                }
                this.stateLog.forEach((n, o)=>{
                    if (n[1] === -1) {
                        t.stateLog.delete(o);
                        n[1] = (e || (e = r("performanceNow")))();
                        t.stateLog.set(`incomplete_${o}`, n);
                    }
                });
                if (this.pendingImages.size() > 0) {
                    r("addAnnotations")(this.annotations, {
                        int: {
                            incompleteImageCount: this.pendingImages.size()
                        }
                    });
                    this.pendingImages.forEach((n)=>{
                        t.stateLog.set(`incomplete_imgLoad_${t.$VisualCompletionTracing$p_3++}`, [
                            n,
                            (e || (e = r("performanceNow")))()
                        ]);
                    });
                }
                this.attemptMeasurement(true);
            }
        };
        n_prototype.tearDown = function() {
            t.prototype.tearDown.call(this);
            for (const [n, r] of this.$VisualCompletionTracing$p_7.entries()){
                if (r.cleanAfterReport) {
                    this.$VisualCompletionTracing$p_7.delete(n);
                }
            }
            this.pendingLocks.clear();
            this.$VisualCompletionTracing$p_4.pendingLoadingElements.clear();
            this.pendingImages.clear();
        };
        n_prototype.subscribeExtraMutation = function(t) {
            const e = this;
            let n = [];
            o("VisualCompletionUtil").subscribeUserInputForExtraMutation(this, t, n);
            const r = ()=>{
                if (e.mutationObserver) {
                    e.mutationObserver.disconnect();
                }
                if (e.intersectionObserver) {
                    e.intersectionObserver.disconnect();
                }
                e.mutationRoots.clear();
                n.forEach((e)=>e());
                n = [];
                e.$VisualCompletionTracing$p_8 = null;
            };
            this.$VisualCompletionTracing$p_8 = function(e, n, r, o) {
                t(e, n, r, o);
            };
            return function() {
                r();
            };
        };
        return n;
    })(r("VisualCompletionLogger"));
    l.default = c;
}, 98);